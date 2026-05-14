import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex items-center justify-between px-8 py-6">
            {/* left side contain */}
            <div className="">
                <h1 className="text-3xl font-bold">Dashboard Overview</h1>
                <p className="text-gray-600 mt-2">You can access all your data and information from anywhere. .</p>
            </div>

            {/* right side contain */}
            <div>
                <Link to='add-parcel' className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700">Add Parcel</Link>
            </div>
        </div>
    );
};

export default Dashboard;