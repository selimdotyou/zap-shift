// SendParcel.jsx
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const SendParcel = () => {
    const pickupTime = "4pm-7pm";
    const { user } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const parcelType = watch("parcelType");

    // Fetch service centers
    const { data: serviceArea, isLoading } = useQuery({
        queryKey: ['serviceArea'],
        queryFn: async () => {
            const { data } = await axios.get("http://localhost:5000/service-centers");
            return data;
        }
    });

    const { mutate: createParcel } = useMutation({
        mutationFn: async (parcelData) => {
            const { data } = await axios.post("http://localhost:5000/parcels", parcelData);
            return data;
        }
    });

    if (isLoading) return <p className="p-4">Loading...</p>;

    const regions = [...new Set(serviceArea.map(center => center.region))];

    const getDistrictsByRegion = (region = "") => {
        const districts = serviceArea
            .filter(center => (center.region || "").toLowerCase() === region.toLowerCase())
            .map(center => center.district);
        return [...new Set(districts)];
    };

    const handleBooking = async (data) => {
        // Price calculation
        let price = 0;
        if (data.parcelType === "document" && data.senderDistrict === data.receiverDistrict) price = 60;
        else if (data.parcelType === "document") price = 80;
        else if (data.parcelType === "non-document" && data.senderDistrict === data.receiverDistrict && data.parcelWeight <= 3) price = 100;
        else if (data.parcelType === "non-document" && data.senderDistrict === data.receiverDistrict) price = 100 + (data.parcelWeight - 3) * 10;
        else if (data.parcelType === "non-document" && data.senderDistrict !== data.receiverDistrict && data.parcelWeight <= 3) price = 120;
        else price = 120 + (data.parcelWeight - 3) * 10;
        data.price = price;

        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "Do you want to create this parcel?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, create it!",
                cancelButtonText: "Cancel",
            });

            if (result.isConfirmed) {
                await createParcel(data);
                toast.success("Parcel created successfully!");
                navigate("/dashboard/deliveries");
                Swal.fire({
                    title: "Created!",
                    text: "Your parcel has been created.",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });
            } else {
                toast.info("Parcel creation cancelled.");
            }
        } catch (error) {
            toast.error(error.message || "Something went wrong!");
        }
    };

    // Watch selected regions for dropdowns
    const selectedSenderRegion = watch("senderRegion") || regions[0] || "";
    const selectedReceiverRegion = watch("receiverRegion") || regions[0] || "";

    return (
        <div className="min-h-screen p-4 md:p-8 bg-gray-50">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Send A Parcel</h1>
            <p className="text-gray-600 mb-6">Enter your parcel details</p>

            <form onSubmit={handleSubmit(handleBooking)} className="bg-white rounded-xl shadow p-4 md:p-6 space-y-6">

                {/* Parcel Type */}
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <div className="flex items-center gap-2">
                        <input type="radio" value="document" defaultChecked {...register("parcelType", { required: true })} />
                        <label>Document</label>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="radio" value="non-document" {...register("parcelType", { required: true })} />
                        <label>Non Document</label>
                    </div>
                </div>

                {/* Parcel Name & Weight */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Parcel Name</label>
                        <input type="text" className="w-full px-3 py-2 border border-pink-500 rounded-xl" {...register("parcelName", { required: true })} />
                        {errors.parcelName && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>

                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Parcel Weight (kg)</label>
                        <input
                            type="text"
                            className="w-full px-3 py-2 border border-pink-500 rounded-xl"
                            value={parcelType === "document" ? "0.5" : undefined}
                            disabled={parcelType === "document"}
                            {...register("parcelWeight", { required: parcelType !== "document" })}
                        />
                        {errors.parcelWeight && <span className="text-red-500 text-sm">This field is required</span>}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Sender Info */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-gray-800">Sender Details</h2>
                        <div>
                            <label className="block text-gray-700 mb-1">Name</label>
                            <input className="w-full px-3 py-2 border rounded-xl" placeholder="Sender Name" {...register("senderName", { required: true })} />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Address</label>
                            <input className="w-full px-3 py-2 border rounded-xl" placeholder="Sender Address" {...register("senderAddress", { required: true })} />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Email</label>
                            <input className="w-full px-3 py-2 border rounded-xl" value={user?.email} {...register("senderEmail", { required: true })} />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Phone</label>
                            <input className="w-full px-3 py-2 border rounded-xl" placeholder="Sender Phone" {...register("senderPhone", { required: true })} />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Region</label>
                            <select className="w-full px-3 py-2 border rounded-xl" {...register("senderRegion")}>
                                {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">District</label>
                            <select className="w-full px-3 py-2 border rounded-xl" {...register("senderDistrict")}>
                                {getDistrictsByRegion(selectedSenderRegion).map((d, i) => <option key={i} value={d}>{d}</option>)}
                            </select>
                        </div>
                    </div>

                    {/* Receiver Info */}
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold text-gray-800">Receiver Details</h2>
                        <div>
                            <label className="block text-gray-700 mb-1">Name</label>
                            <input className="w-full px-3 py-2 border rounded-xl" placeholder="Receiver Name" {...register("receiverName", { required: true })} />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Address</label>
                            <input className="w-full px-3 py-2 border rounded-xl" placeholder="Receiver Address" {...register("receiverAddress", { required: true })} />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Email</label>
                            <input className="w-full px-3 py-2 border rounded-xl" placeholder="Receiver Email" {...register("receiverEmail", { required: true })} />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Phone</label>
                            <input className="w-full px-3 py-2 border rounded-xl" placeholder="Receiver Phone" {...register("receiverPhone", { required: true })} />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">Region</label>
                            <select className="w-full px-3 py-2 border rounded-xl" {...register("receiverRegion")}>
                                {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
                            </select>
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-1">District</label>
                            <select className="w-full px-3 py-2 border rounded-xl" {...register("receiverDistrict")}>
                                {getDistrictsByRegion(selectedReceiverRegion).map((d, i) => <option key={i} value={d}>{d}</option>)}
                            </select>
                        </div>
                    </div>

                </div>

                <p className="text-gray-700">* PickUp Time {pickupTime} Approx.</p>

                <button className="w-full bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600 transition-colors">
                    Proceed to Confirm Booking
                </button>
            </form>
        </div>
    );
};

export default SendParcel;