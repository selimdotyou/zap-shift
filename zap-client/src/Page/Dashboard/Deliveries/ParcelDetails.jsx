import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const ParcelDetails = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const { data: parcel, isLoading } = useQuery({
        queryKey: ['parcel', id],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/parcel/${id}`);
            return data;
        }
    });

    if (isLoading) return <p>Loading...</p>
    console.log(parcel);
    return (
        <div>
            <h1 className="text-2xl font-bold">Parcel Details</h1>
            <p>Parcel ID: {id}</p>
            {/* sender info , receiver info and parcel details in separate sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                {/* sender info */}
                <div className="bg-white shadow rounded p-4">
                    <h2 className="text-lg font-semibold mb-4">Sender Information</h2>
                    <p><span className="font-semibold">Name:</span> {parcel?.senderName}</p>
                    <p><span className="font-semibold">Email:</span> {parcel?.senderEmail}</p>
                    <p><span className="font-semibold">Phone:</span> {parcel?.senderPhone}</p>
                    <p><span className="font-semibold">Region:</span> {parcel?.senderRegion}</p>
                    <p><span className="font-semibold">Address:</span> {parcel?.senderAddress}</p>
                </div>
                {/* receiver info */}
                <div className="bg-white shadow rounded p-4">
                    <h2 className="text-lg font-semibold mb-4">Receiver Information</h2>
                    <p><span className="font-semibold">Name:</span> {parcel?.receiverName}</p>
                    <p><span className="font-semibold">Email:</span> {parcel?.receiverEmail}</p>
                    <p><span className="font-semibold">Phone:</span> {parcel?.receiverPhone}</p>
                    <p><span className="font-semibold">Region:</span> {parcel?.receiverRegion}</p>
                    <p><span className="font-semibold">Address:</span> {parcel?.receiverAddress}</p>
                </div>
                {/* parcel details */}
                <div className="bg-white shadow rounded p-4">
                    <h2 className="text-lg font-semibold mb-4">Parcel Details</h2>
                     <p><span className="font-semibold">Parcel Name:</span> {parcel?.parcelName}</p>
                    <p><span className="font-semibold">Type:</span> {parcel?.parcelType}</p>
                    <p><span className="font-semibold">Weight:</span> {parcel?.parcelWeight} kg</p>
                    <p><span className="font-semibold">Price:</span> {parcel?.price} Taka</p>
                    <p><span className="font-semibold">Delivery Status:</span> {parcel?.deliveryStatus ? "Delivered" : "In Transit"}</p>
                    <p><span className="font-semibold">Payment Status:</span> {parcel?.paymentStatus ? "Paid" : "Not Paid"}</p>
                </div>
            </div>

        </div>
    );
};

export default ParcelDetails;