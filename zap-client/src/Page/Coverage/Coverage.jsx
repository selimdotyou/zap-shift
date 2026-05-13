import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";

import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix leaflet default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const Coverage = () => {
    const position = [23.8103, 90.4125];

    const [serviceCenters, setServiceCenters] = useState([]);
    const [loading, setLoading] = useState(true);
    const mapRef = useRef(null);
    // Fetch service centers
    const fetchServiceCenters = async () => {
        try {
            const response = await fetch(
                "http://localhost:5000/service-centers"
            );

            const data = await response.json();

            setServiceCenters(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching service centers:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServiceCenters();
    }, []);

    console.log(serviceCenters);
    const handleSearch = (e) => {
        e.preventDefault();
        const searchTerm = e.target.search.value.toLowerCase();
        const filteredCenters = serviceCenters.find((center) =>
            center.district.toLowerCase().includes(searchTerm)
        );
        if (filteredCenters) {
            const coordinates = [
                filteredCenters.latitude,
                filteredCenters.longitude,
            ];
            mapRef.current.setView(coordinates, 12);
        };
    }

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4">
                    We are available in 64 districts across Bangladesh
                </h1>

                <p>Loading service centers...</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">
                We are available in 64 districts across Bangladesh
            </h1>

            {/* Search */}
            <div className="mb-6 flex items-center space-x-4">
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        name="search"
                        placeholder="Search for your district..."
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 -ms-10">
                        Search
                    </button>
                </form>
            </div>

            {/* Map */}
            <div className="w-full h-96 rounded-lg overflow-hidden">
                <MapContainer
                    center={position}
                    zoom={7}
                    scrollWheelZoom={true}
                    className="w-full h-full"
                    ref={mapRef}
                >
                    <TileLayer
                        attribution="&copy; OpenStreetMap contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {serviceCenters.map((center) => (
                        <Marker
                            key={center._id}
                            position={[
                                parseFloat(center.latitude),
                                parseFloat(center.longitude),
                            ]}
                        >
                            <Popup>
                                <div>
                                    <h2 className="font-bold text-lg">
                                        {center.
                                            district
                                        }
                                    </h2>

                                    <p>{center.address}</p>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;