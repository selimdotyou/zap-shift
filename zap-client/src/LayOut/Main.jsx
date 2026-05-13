import { Outlet } from "react-router-dom";
import Navbar from "../components/Share/Navbar";
import Footer from "../components/Share/Footer";

const Main = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
            <Navbar />
            {/* calculate height */}
            <div className="min-h-[calc(100vh-408px)]">
                <Outlet />
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Main;