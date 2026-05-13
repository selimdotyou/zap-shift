import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (
        <div className="min-h-screen flex items-center justify-center  px-4">
            <div className="w-full">

                {/* Title */}
                <h1 className="text-6xl font-bold text-black mb-4">
                    Forgot Password
                </h1>

                {/* Subtitle */}
                <p className="text-2xl text-gray-800 leading-relaxed mb-10">
                    Enter your email address and we’ll send you a reset link.
                </p>

                <form>
                    {/* Email */}
                    <div className="mb-8">
                        <label className="block text-xl font-semibold text-gray-800 mb-3">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="w-full px-5 py-4 text-xl border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400"
                        />
                    </div>

                    {/* Button */}
                    <button className="w-full bg-lime-400 hover:bg-lime-500 transition-all duration-200 text-black text-2xl font-medium py-4 rounded-xl mb-10">
                        Send
                    </button>
                </form>

                {/* Login */}
                <p className="text-gray-500 text-2xl">
                    Remember your password?{" "}
                    <Link to="/login" className="text-lime-600 cursor-pointer hover:underline">
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default ForgotPassword;