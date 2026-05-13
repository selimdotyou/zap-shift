import { NavLink } from "react-router-dom";
import LogoImg from "../../assets/logo.png";

const Footer = () => {

    return (
        <div className="bg-white py-12 px-10 dark:bg-gray-800 dark:border-gray-600 rounded-lg border-t mb-0 border-gray-200">
            <div className="">
                <div className="flex justify-center text-sm text-gray-600">
                    <div className="flex items-center text-sm text-gray-600">
                        <img src={LogoImg} alt="Logo" className="w-12 h-12 mr-2" />
                        <span className="text-xl -ms-5 mt-4 text-white font-bold">ZapShift</span>
                    </div>
                </div>
                <div className="flex max-w-4xl mx-auto justify-center mt-4 text-sm text-white">
                    <p className="text-center">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>
            </div>
            {/* menu items here */}
            <div className="flex max-w-4xl border-y py-4 border-dotted  mx-auto justify-center mt-4 text-sm text-gray-600">
                <NavLink to="/services" className="px-2.5 py-2 rounded-lg hover:bg-gray-100 ">
                    Services
                </NavLink>
                <NavLink to="/coverage" className="px-2.5 py-2 rounded-lg hover:bg-gray-100 ">
                    Coverage
                </NavLink>
                <NavLink to="/about" className="px-2.5 py-2 rounded-lg hover:bg-gray-100 ">
                    About Us
                </NavLink>
                <NavLink to="/pricing" className="px-2.5 py-2 rounded-lg hover:bg-gray-100 ">
                    Pricing
                </NavLink>
                <NavLink to="/blog" className="px-2.5 py-2 rounded-lg hover:bg-gray-100 ">
                    Blog
                </NavLink>
                <NavLink to="/contact" className="px-2.5 py-2 rounded-lg hover:bg-gray-100 ">
                    Contact
                </NavLink>
            </div>

            {/* social media links and logo */}
            <div className="flex max-w-4xl mx-auto justify-center mt-4 text-sm text-gray-600">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {/* Twitter Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-black hover:text-gray-800 transition"
                    >
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.2 4.2 0 0 0 1.85-2.31 8.27 8.27 0 0 1-2.64 1.01 4.13 4.13 0 0 0-7.04 3.76A11.72 11.72 0 0 1 3.16 4.9a4.13 4.13 0 0 0 1.28 5.51 4.1 4.1 0 0 1-1.87-.52v.05a4.14 4.14 0 0 0 3.31 4.05 4.1 4.1 0 0 1-1.86.07 4.14 4.14 0 0 0 3.86 2.87A8.3 8.3 0 0 1 2 18.58a11.7 11.7 0 0 0 6.29 1.84c7.55 0 11.68-6.25 11.68-11.68 0-.18 0-.36-.01-.54A8.3 8.3 0 0 0 22.46 6z" />
                    </svg>
                </button>
                <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded ml-2">
                    {/* facebook icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-blue-600 hover:text-blue-700 transition"
                    >
                        <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.19 8.44 10v-7.07H7.9v-2.93h2.54V9.41c0-2.5 1.5-3.88 3.78-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.93h-2.33V22c4.78-.81 8.44-4.98 8.44-9.93z" />
                    </svg>
                </button>

                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                    {/* linkedin icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-blue-700 hover:text-blue-800 transition"
                    >
                        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66H9.37V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.39-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
                    </svg>
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">
                    {/* youtube icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-red-600 hover:text-red-700 transition"
                    >
                        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 0 0-2.1 2.1A31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.75 15.5v-7l6 3.5-6 3.5z" />
                    </svg>
                </button>

            </div>
        </div>

    );
};

export default Footer;