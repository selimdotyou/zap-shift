import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const SendParcel = () => {
    const pickupTime = "4pm-7pm";
    const { user } = useAuth();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const parcelType = watch("parcelType");
    const { data: serviceArea, isLoading } = useQuery({
        queryKey: ['serviceArea'],
        queryFn: async () => {
            const { data } = await axios.get("http://localhost:5000/service-centers");
            return data;
        }
    })
    if (isLoading) return <p>Loading...</p>

    // region list
    const regions = [...new Set(serviceArea.map(center => center.region))];
    // district list by region waise
    const getDistrictsByRegion = (region = "") => {
        const districts = serviceArea
            .filter(
                center =>
                    (center.region || "").toLowerCase() ===
                    region.toLowerCase()
            )
            .map(center => center.district);

        return [...new Set(districts)];
    };



    const handleBooking = (data) => {
        // handle price by parcel type and district
        let price = 0;
        if (data.parcelType === "document" && data.senderDistrict === data.receiverDistrict) {
            price = 60;
        } else if (data.parcelType === "document" && data.senderDistrict !== data.receiverDistrict) {
            price = 80;
        }
        else if (data.parcelType === "non-document" && data.senderDistrict === data.receiverDistrict && data.parcelWeight <= 3) {
            price = 100;
        }
        else if (data.parcelType === "non-document" && data.senderDistrict === data.receiverDistrict && data.parcelWeight > 3) {
            price = 100 + (data.parcelWeight - 3) * 10;
        }
        else if (data.parcelType === "non-document" && data.senderDistrict !== data.receiverDistrict && data.parcelWeight <= 3) {
            price = 120;
        }
        else if (data.parcelType === "non-document" && data.senderDistrict !== data.receiverDistrict && data.parcelWeight > 3) {
            price = 120 + (data.parcelWeight - 3) * 10;
        }
        data.price = price;
        console.log(data);

    };
    return (
        <div>
            <div className="p-8">
                <h1 className="text-4xl font-bold mb-4">Send A Parcel</h1>
            </div>
            <div className="px-8 border-b border-gray-300 pb-4">
                <p className="text-gray-500"> Enter your parcel details</p>
            </div>
            {/* document details  */}
            <form onSubmit={handleSubmit(handleBooking)}>
                <div className="px-8 py-6">
                    {/* document checkout box */}

                    <div className=" border-b border-gray-300 pb-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    value="document"
                                    className="radio w-4 h-4"
                                    defaultChecked
                                    {...register("parcelType", { required: true })}
                                />
                                <span>Document</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    value="non-document"
                                    className="radio w-4 h-4"
                                    {...register("parcelType", { required: true })}
                                />
                                <span>Non Document</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <label className="block font-medium text-gray-700 w-full py-3 mt-4"> Parcel Name </label>
                                <input type="text" className="text-lg py-2 px-3 border border-pink-500 rounded-2xl w-full" {...register("parcelName", { required: true })} />
                                {
                                    errors.parcelName && <span className="text-red-500 text-sm">This field is required</span>
                                }
                            </div>
                            <div className="w-1/2">
                                <label className="block  font-medium text-gray-700 w-full py-3 mt-4"> Parcel Weight (kg) </label>

                                <input
                                    type="text"
                                    className="text-lg py-2 px-3 border border-pink-500 rounded-2xl w-full"
                                    value={parcelType === "document" ? "0.5" : undefined}
                                    disabled={parcelType === "document"}
                                    {...register("parcelWeight", {
                                        required: parcelType !== "document",
                                    })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="md:flex gap-4">
                        {/* sender details */}
                        <div className="mt-8 md:w-1/2">
                            {/* sender name */}
                            <div className="">
                                <label className="block font-medium text-gray-700 w-full py-3 mt-4"> Sender Name </label>
                                <input type="text" className="text-lg py-2 px-3 border border-pink-500 rounded-2xl w-full" {...register("senderName", { required: true })} />
                                {
                                    errors.senderName && <span className="text-red-500 text-sm">This field is required</span>
                                }
                            </div>
                            {/* sender address */}
                            <div className="">
                                <label className="block font-medium text-gray-700 w-full py-3 mt-4"> Sender Address </label>
                                <input type="text" className="text-lg py-2 px-3 border border-pink-500 rounded-2xl w-full" />
                                {
                                    errors.senderAddress && <span className="text-red-500 text-sm">This field is required</span>
                                }
                            </div>
                            {/* sender email */}
                            <div className="">
                                <label className="block font-medium text-gray-700 w-full py-3 mt-4"> Sender Email </label>
                                <input type="email" value={user?.email} className="text-lg py-2 px-3 border border-pink-500 rounded-2xl w-full" {...register("senderEmail", { required: true })} />
                                {
                                    errors.senderEmail && <span className="text-red-500 text-sm">This field is required</span>
                                }
                            </div>
                            {/* sender phone */}
                            <div className="">
                                <label className="block font-medium text-gray-700 w-full py-3 mt-4"> Sender Phone </label>
                                <input type="text" className="text-lg py-2 px-3 border border-pink-500 rounded-2xl w-full" {...register("senderPhone", { required: true })} />
                                {
                                    errors.senderPhone && <span className="text-red-500 text-sm">This field is required</span>
                                }
                            </div>
                            {/* receiver region */}
                            <div className="">
                                <label className="block font-medium text-gray-700 w-full py-3 mt-4"> Sender Region </label>
                                {/* select dropdown for district */}
                                <select className="text-lg py-2 px-3 border border-pink-500 rounded-2xl w-full" {...register("senderRegion", { required: true })}>
                                    <option value="">Select Region</option>
                                    {
                                        regions.map((region, index) => <option key={index} value={region.toLowerCase()}>{region}</option>)
                                    }
                                </select>
                                {
                                    errors.senderRegion && <span className="text-red-500 text-sm">This field is required</span>
                                }
                            </div>
                            {/* your District */}
                            <div className="">
                                <label className="block font-medium text-gray-700 w-full py-3 mt-4"> Your District </label>
                                {/* select dropdown for district */}
                                <select className="text-lg py-2 px-3 border border-pink-500 rounded-2xl w-full" {...register("senderDistrict", { required: true })}>
                                    <option value="">Select District</option>
                                    {
                                        getDistrictsByRegion(watch("senderRegion")).map((district, index) => <option key={index} value={district.toLowerCase()}>{district}</option>)
                                    }
                                </select>
                                {
                                    errors.senderDistrict && <span className="text-red-500 text-sm">This field is required</span>
                                }
                            </div>


                            {/* Pickup Instruction */}
                            <div className="">
                                <label className="block font-medium text-gray-700 w-full py-3 mt-4"> Pickup Instruction </label>
                                <textarea className="text-lg py-2 px-3 border border-pink-500 rounded-2xl w-full" rows="4" {...register("pickupInstruction", { required: true })} />
                                {
                                    errors.pickupInstruction && <span className="text-red-500 text-sm">This field is required</span>
                                }
                            </div>
                        </div>
                        {/* receiver details */}
                        <div className="mt-8 md:w-1/2">
                            {/* receiver name */}
                            <div className="">
                                <label className="block font-medium text-gray-700 w-full py-3 mt-4"> Receiver Name </label>
                                <input type="text" className="text-lg py-2 px-3 border border-pink-500 rounded-2xl w-full" {...register("receiverName", { required: true })} />
                                {
                                    errors.receiverName && <span className="text-red-500 text-sm">This field is required</span>
                                }
                            </div>
                            {/* receiver address */}
                            <div className="">
                                <label className="block font-medium text-gray-700 w-full py-3 mt-4"> Receiver Address </label>
                                <input type="text" className="text-lg py-2 px-3 border border-pink-500 rounded-2xl w-full" {...register("receiverAddress", { required: true })} />
                                {
                                    errors.receiverAddress && <span className="text-red-500 text-sm">This field is required</span>
                                }
                            </div>

                            {/* receiver email */}
                            <div className="">
                                <label className="block font-medium text-gray-700 w-full py-3 mt-4"> Receiver Email </label>
                                <input type="email" className="text-lg py-2 px-3 border border-pink-500 rounded-2xl w-full" {...register("receiverEmail", { required: true })} />
                                {
                                    errors.receiverEmail && <span className="text-red-500 text-sm">This field is required</span>
                                }
                            </div>

                            {/* Receiver Contact No */}
                            <div className="">
                                <label className="block font-medium text-gray-700 w-full py-3 mt-4"> Receiver Contact No </label>
                                <input type="text" className="text-lg py-2 px-3 border border-pink-500 rounded-2xl w-full" {...register("receiverPhone", { required: true })} />
                                {
                                    errors.receiverPhone && <span className="text-red-500 text-sm">This field is required</span>
                                }
                            </div>
                            {/* receiver region */}
                            <div className="">
                                <label className="block font-medium text-gray-700 w-full py-3 mt-4"> Receiver Region </label>
                                {/* select dropdown for district */}
                                <select className="text-lg py-2 px-3 border border-pink-500 rounded-2xl w-full" {...register("receiverRegion", { required: true })}>
                                    <option value="">Select Region</option>
                                    {
                                        regions.map((region, index) => <option key={index} value={region.toLowerCase()}>{region}</option>)
                                    }
                                </select>
                                {
                                    errors.receiverRegion && <span className="text-red-500 text-sm">This field is required</span>
                                }
                            </div>
                            {/* receiver district*/}
                            <div className="">
                                <label className="block font-medium text-gray-700 w-full py-3 mt-4"> Receiver District </label>
                                <select className="text-lg py-2 px-3 border border-pink-500 rounded-2xl w-full" {...register("receiverDistrict", { required: true })}>

                                    <option value="">Select District</option>
                                    {
                                        getDistrictsByRegion(watch("receiverRegion")).map((district, index) => <option key={index} value={district.toLowerCase()}>{district}</option>)
                                    }
                                </select>
                                {
                                    errors.receiverDistrict && <span className="text-red-500 text-sm">This field is required</span>
                                }
                            </div>
                            {/* Pickup Instruction */}
                            <div className="">
                                <label className="block font-medium text-gray-700 w-full py-3 mt-4"> Pickup Instruction </label>
                                <textarea className="text-lg py-2 px-3 border border-pink-500 rounded-2xl w-full" rows="4" {...register("pickupInstruction", { required: true })} />
                                {
                                    errors.pickupInstruction && <span className="text-red-500 text-sm">This field is required</span>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-lg text-gray-700 mb-4 px-8">
                    {`* PickUp Time ${pickupTime} Approx.`}
                </p>
                <button className="bg-pink-500 text-white py-3 px-6 rounded-2xl hover:bg-pink-600 transition-colors duration-300 mx-8 mb-8">
                    Proceed to Confirm Booking
                </button>
            </form>

        </div>
    );
};

export default SendParcel;