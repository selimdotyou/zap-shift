import { FiPackage, FiCheckCircle, FiClock } from "react-icons/fi";
import DeliveriesTable from "../../../components/Dashboard/DeliveriesTable";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Deliveries = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { data: deliveries, isLoading, refetch } = useQuery({
        queryKey: ['deliveries', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/parcels?email=${user?.email}`);
            return data;
        }
    });

    // handle delete parcel
    const handleDelete = async (id) => {
    try {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => { 
            if (result.isConfirmed) {
                const { data } = await axiosPublic.delete(`/parcel/${id}`);
                if (data.deletedCount > 0) {
                    toast.success("Parcel deleted successfully!");
                    refetch();
                }
            }
        });
    } catch (error) {
        toast.error(error.message || "Failed to delete parcel");
    }
};


    if (isLoading) return <p>Loading...</p>


    return (
        <div>
            <h1 className="text-2xl font-bold">All Deliveries</h1>
            {/* total, paid, pending deliveries card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {/* Total Deliveries */}
                <div className="bg-white shadow rounded p-4 flex items-center gap-4">
                    <FiPackage className="text-4xl text-blue-500" />
                    <div>
                        <h2 className="text-sm text-gray-500">Total Deliveries</h2>
                        <p className="text-2xl font-bold">120</p>
                    </div>
                </div>

                {/* Paid Deliveries */}
                <div className="bg-white shadow rounded p-4 flex items-center gap-4">
                    <FiCheckCircle className="text-4xl text-green-500" />
                    <div>
                        <h2 className="text-sm text-gray-500">Paid Deliveries</h2>
                        <p className="text-2xl font-bold">100</p>
                    </div>
                </div>

                {/* Pending Deliveries */}
                <div className="bg-white shadow rounded p-4 flex items-center gap-4">
                    <FiClock className="text-4xl text-yellow-500" />
                    <div>
                        <h2 className="text-sm text-gray-500">Pending Deliveries</h2>
                        <p className="text-2xl font-bold">20</p>
                    </div>
                </div>
            </div>
            {/* deliveries table */}
            <DeliveriesTable deliveries={deliveries} handleDelete={handleDelete} />
        </div>
    );
};

export default Deliveries;