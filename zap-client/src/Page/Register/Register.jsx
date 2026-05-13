import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen py-7 flex items-center justify-center px-4">
            <div className="w-full">

                {/* Title */}
                <h1 className="text-6xl font-bold text-black mb-4">
                    Create an Account
                </h1>

                <p className="text-2xl text-gray-800 mb-8">
                    Register with ZapShift
                </p>

                <form>
                    {/* Profile Upload */}
                    <div className="mb-8">
                        <label
                            htmlFor="profile"
                            className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer overflow-hidden"
                        >
                            <span className="text-4xl text-gray-400">👤</span>
                        </label>

                        <input
                            type="file"
                            name="profile"
                            id="profile"
                            className="hidden"
                        />
                    </div>

                    {/* Name */}
                    <div className="mb-5">
                        <label className="block text-lg font-medium text-gray-800 mb-2">
                            Name
                        </label>

                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400"
                        />
                    </div>

                    {/* Email */}
                    <div className="mb-5">
                        <label className="block text-lg font-medium text-gray-800 mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-5">
                        <label className="block text-lg font-medium text-gray-800 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400"
                        />
                    </div>

                    {/* Register Button */}
                    <button className="w-full bg-lime-400 hover:bg-lime-500 transition-all duration-200 text-black font-semibold py-3 rounded-xl mb-5">
                        Register
                    </button>
                </form>

                {/* Login */}
                <p className="text-gray-500 text-xl text-center mb-5">
                    Already have an account?{" "}
                    <Link to="/login" className="text-lime-600 cursor-pointer hover:underline">
                        Login
                    </Link>
                </p>

                {/* Divider */}
                <div className="text-center text-gray-500 text-xl mb-5">
                    Or
                </div>

                {/* Google Register */}
                <button className="w-full flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 transition-all duration-200 py-3 rounded-xl text-lg font-medium">
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="google"
                        className="w-6 h-6"
                    />

                    Register with google
                </button>

            </div>
        </div>
    );
};

export default Register;