import DeliverImg from "../../assets/live-tracking.png";
import SafeDeliveryImg from "../../assets/safe-delivery.png";
const Features = () => {
    return (
        <div className="container mx-auto px-4 py-16 border-b border-gray-600 border-dotted">
            <div className="md:flex items-center gap-10 border mb-4 border-gray-200 shadow-lg rounded-lg p-10">
                <div className=" mr-10 pr-10">
                    <img src={DeliverImg} alt="Deliver" />
                </div>
                <div className=" border-l border-gray-300 pl-10 border-dotted">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">Live Tracking</h1>
                    <p className="text-gray-600 text-md mb-6">Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>   
                </div>
            </div>
            <div className="md:flex items-center gap-10 border border-gray-200 mb-4 shadow-lg  rounded-lg p-10">
                <div className=" mr-10 pr-10">
                    <img src={SafeDeliveryImg} alt="Safe Delivery" />
                </div>
                <div className=" border-l border-gray-300 pl-10 border-dotted">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">Safe Delivery</h1>
                    <p className="text-gray-600 text-md mb-6">Experience secure and reliable delivery with our dedicated safety measures. Your packages are handled with care from pickup to final delivery.</p>   
                </div>
            </div>
            <div className="md:flex items-center gap-10 border border-gray-200 mb-4 shadow-lg  rounded-lg p-10">
                <div className=" mr-10 pr-10">
                    <img src={SafeDeliveryImg} alt="Safe Delivery" />
                </div>
                <div className=" border-l border-gray-300 pl-10 border-dotted">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">24/7 Call Center Support</h1>
                    <p className="text-gray-600 text-md mb-6">Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>   
                </div>
            </div>
        </div>
    );
};

export default Features;