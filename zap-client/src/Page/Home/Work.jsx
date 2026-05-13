import logo from "../../assets/delivery-van.png";
const Work = () => {
    return (
        <div className="py-4">
            <h1 className="text-3xl font-bold mb-4">How It Works</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* card  */}
                <div className=" p-6 cursor-pointer hover:bg-blue-100 bg-gray-100 rounded-2xl border-2 border-blue-400 hover:shadow-lg transition">

                    {/* Icon */}
                    <div className="mb-4 text-gray-600">
                        <img src={logo} alt="Delivery Van" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Booking Pick & Drop
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed">
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>
                {/* card  */}
                <div className=" p-6 cursor-pointer hover:bg-blue-100 bg-gray-100 rounded-2xl border-2 border-blue-400 hover:shadow-lg transition">

                    {/* Icon */}
                    <div className="mb-4 text-gray-600">
                        <img src={logo} alt="Delivery Van" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                       Cash On Delivery
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed">
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>
                {/* card  */}
                <div className=" p-6 cursor-pointer hover:bg-blue-100 bg-gray-100 rounded-2xl border-2 border-blue-400 hover:shadow-lg transition">

                    {/* Icon */}
                    <div className="mb-4 text-gray-600">
                        <img src={logo} alt="Delivery Van" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Delivery Hub
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed">
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>
                {/* card  */}
                <div className="p-6 cursor-pointer hover:bg-blue-100 bg-gray-100 rounded-2xl border-2 border-blue-400 hover:shadow-lg transition">

                    {/* Icon */}
                    <div className="mb-4 text-gray-600">
                        <img src={logo} alt="Delivery Van" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Booking SME & Corporate
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed">
                        From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Work;