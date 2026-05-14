import { Link, useNavigate } from "react-router-dom";
import { useForm  } from "react-hook-form"
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
const Login = () => {
    const {signIn , signInWithGoogle} = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }} = useForm()

    const handleLogin = async (data) => {
            console.log(data);
            try {
                await signIn(data.email, data.password);
                navigate("/");
            } catch (error) {
                toast.error(error.message);
            }
    }

    const handleGoogleLogin = async () => {
        try {
            await signInWithGoogle();
            navigate("/");
        } catch (error) {
            toast.error(error.message);
        }
    }
    
    return (
        <div className="mt-3 flex items-center justify-center ">
            <div className="w-full bg-white p-8 rounded-2xl">
                <h1 className="text-5xl font-bold text-black mb-2">
                    Welcome Back
                </h1>

                <p className="text-gray-700 text-xl mb-8">
                    Login with ZapShift
                </p>

                <form onSubmit={handleSubmit(handleLogin)} className="mb-5">
                    {/* Email */}
                    <div className="mb-5">
                        <label className="block text-lg font-medium text-gray-800 mb-2">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            {...register("email", { required: "Email is required" })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400"
                        />
                        {
                            errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>
                        }
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                        <label className="block text-lg font-medium text-gray-800 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            {...register("password", { required: "Password is required" })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400"
                        />
                        {
                            errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>
                        }
                    </div>

                    {/* Forgot password */}
                    <div className="mb-5">
                        <Link
                            to="/forgot-password"
                            className="text-gray-500 underline text-lg hover:text-gray-700"
                        >
                            Forget Password?
                        </Link>
                    </div>

                    {/* Login button */}
                    <button className="w-full bg-lime-400 hover:bg-lime-500 transition-all duration-200 text-black font-semibold py-3 rounded-xl mb-5">
                        Login
                    </button>
                </form>

                {/* Register */}
                <p className="text-gray-600 text-lg text-center mb-5">
                    Don’t have any account?{" "}
                    <Link to="/register" className="text-lime-600 font-medium cursor-pointer">
                        Register
                    </Link>
                </p>

                <div className="text-center text-gray-500 mb-5 text-lg">
                    Or
                </div>

                {/* Google Login */}
                <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 transition-all duration-200 py-3 rounded-xl text-lg font-medium">
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="google"
                        className="w-6 h-6"
                    />

                    Login with google
                </button>
            </div>
        </div>
    );
};

export default Login;