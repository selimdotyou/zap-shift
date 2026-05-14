import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GiSpinningRibbons } from "react-icons/gi";
import useAuth from "../../hooks/useAuth";

const Register = () => {
    const { createUser, signInWithGoogle, updateUserProfile } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    const handleRegister = async (data) => {
        const formData = new FormData();
        formData.append("image", data.profile[0]);

        try {
            
            const { data: imgUrl } = await axios.post(
                `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_UPLOAD_URL_API}`,
                formData
            );

            const profileImageUrl = imgUrl.data.url;

            await createUser(data.email, data.password);

            await updateUserProfile(data.name, profileImageUrl);
        
            toast.success("Registration successful");

            navigate("/");
        }
        catch (error) {
            toast.error(error.message);
        }
        finally {
            setLoading(false);
        }
    };

    // Handle Google Register
    const handleGoogleRegister = async () => {
        try {
            setLoading(false);
            await signInWithGoogle();
            toast.success("Registration successful");
            navigate("/");
        }
        catch (error) {
            toast.error(error.message);
        }
        finally {
            setLoading(true);
        }
    }




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

                <form onSubmit={handleSubmit(handleRegister)}>
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
                            {...register("profile", { required: "Profile image is required" })}
                        />
                        {
                            errors.profile && <p className="text-red-500 mt-1">{errors.profile.message}</p>
                        }
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
                            {...register("name", { required: "Name is required" })}
                        />
                        {
                            errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>
                        }
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
                            {...register("email", { required: "Email is required" })}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400"
                        />
                        {
                            errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>
                        }
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
                            {
                            ...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400"
                        />
                        {
                            errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>
                        }
                    </div>

                    {/* Register Button */}
                    {
                        loading ? <button className="w-full bg-lime-400 hover:bg-lime-500 transition-all duration-200 text-black font-semibold py-3 rounded-xl mb-5">
                            Register
                        </button> :
                            <GiSpinningRibbons className="text-2xl animate-spin" />
                    }
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
                <button onClick={handleGoogleRegister} className="w-full flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 transition-all duration-200 py-3 rounded-xl text-lg font-medium">
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