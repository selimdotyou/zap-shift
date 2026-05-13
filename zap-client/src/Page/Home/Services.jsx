import ServiceImg from "../../assets/service.png";
import SafeDeliveryImg from "../../assets/safe-delivery.png";
const Services = () => {
    return (
        <div className={"bg-[#03373D] py-16 px-4 rounded-2xl mt-16"}>
            {/* services content */}
            <div className="text-center text-white mb-8 max-w-2xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
                <h1 className="text-xs font-medium text-gray-300 text-center">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-16 gap-8">
                <div className="bg-white hover:bg-[#caeb66] transition duration-2000 p-6 rounded-lg shadow-md">
                    <img src={ServiceImg} alt="Service 1" className="w-16 h-16 mx-auto rounded-full object-cover mb-4 rounded" />
                    <div className="mt-2">
                        <h2 className="text-lg font-semibold text-center mb-2">Nationwide Delivery</h2>
                        <p className="text-gray-600 text-sm text-center">We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                    </div>
                </div>
                <div className="bg-white hover:bg-[#caeb66] transition duration-2000 p-6 rounded-lg shadow-md">
                    <img src={SafeDeliveryImg} alt="Safe Delivery" className="w-16 h-16 mx-auto rounded-full object-cover mb-4 rounded" />
                    <div className="mt-2">
                        <h2 className="text-lg font-semibold text-center mb-2">Fulfillment Solution</h2>
                        <p className="text-gray-600 text-sm text-center">We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                    </div>
                </div>
                <div className="bg-white hover:bg-[#caeb66] transition duration-2000 p-6 rounded-lg shadow-md">
                    <img src={SafeDeliveryImg} alt="Safe Delivery" className="w-16 h-16 mx-auto rounded-full object-cover mb-4 rounded" />
                    <div className="mt-2">
                        <h2 className="text-lg font-semibold text-center mb-2">Cash on Home Delivery</h2>
                        <p className="text-gray-600 text-sm text-center">100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                    </div>
                </div>
                <div className="bg-white hover:bg-[#caeb66] transition duration-2000 p-6 rounded-lg shadow-md">
                    <img src={ServiceImg} alt="Service 1" className="w-16 h-16 mx-auto rounded-full object-cover mb-4 rounded" />
                    <div className="mt-2">
                        <h2 className="text-lg font-semibold text-center mb-2">Corporate Service / Contract In Logistics</h2>
                        <p className="text-gray-600 text-sm text-center">Customized corporate services which includes warehouse and inventory management support.</p>
                    </div>
                </div>
                <div className="bg-white hover:bg-[#caeb66] transition duration-2000 p-6 rounded-lg shadow-md">
                    <img src={ServiceImg} alt="Service 1" className="w-16 h-16 mx-auto rounded-full object-cover mb-4 rounded" />
                    <div className="mt-2">
                        <h2 className="text-lg font-semibold text-center mb-2">Parcel Return</h2>
                        <p className="text-gray-600 text-sm text-center">Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                    </div>
                </div>
                <div className="bg-white hover:bg-[#caeb66] transition duration-2000 p-6 rounded-lg shadow-md">
                    <img src={ServiceImg} alt="Service 1" className="w-16 h-16 mx-auto rounded-full object-cover mb-4 rounded" />
                    <div className="mt-2">
                        <h2 className="text-lg font-semibold text-center mb-2">Fulfillment Solution</h2>
                        <p className="text-gray-600 text-sm text-center">We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;