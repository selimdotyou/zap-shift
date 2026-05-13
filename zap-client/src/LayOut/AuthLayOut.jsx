import Img from "../assets/authImage.png";
import logo from "../assets/logo.png";
import { Link, Outlet } from 'react-router-dom';
const AuthLayOut = () => {
    return (
        <div className="max-w-[1400px] flex justify-between px-8 mx-auto">
            {/* navbar here */}
            <div className="flex-1 py-4">
                {/* navbar content */}
                <Link to={'/'} className="flex items-center ">
                    <img src={logo} alt="Logo" className="h-10 w-10" />
                    <h1 className="text-2xl font-bold -ms-4 mt-2">ZapShift</h1>
                </Link>
                {/* outlet here */}
                <div className="">
                    <Outlet />
                </div>
            </div>
            {/* side img here */}
            <div className="flex-1 bg-[#fafdf0]  min-h-screen">
                <img src={Img} alt="Auth Image" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default AuthLayOut;