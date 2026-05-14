import { useState } from "react";
import { useForm } from "react-hook-form";

const Pricing = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [totalPrice, setTotalPrice] = useState(0);
    const handleReset = () => {
        reset();
        setTotalPrice(0);
    };
    const handleCalculatePrice = (data) => {
        console.log(data);
        let price = 0;
        //  if (data.parcelType === "document" && data.senderDistrict === data.receiverDistrict) {
        //     price = 60;
        // } else if (data.parcelType === "document" && data.senderDistrict !== data.receiverDistrict) {
        //     price = 80;
        // }
        // else if (data.parcelType === "non-document" && data.senderDistrict === data.receiverDistrict && data.parcelWeight <= 3) {
        //     price = 100;
        // }
        // else if (data.parcelType === "non-document" && data.senderDistrict === data.receiverDistrict && data.parcelWeight > 3) {
        //     price = 100 + (data.parcelWeight - 3) * 10;
        // }
        // else if (data.parcelType === "non-document" && data.senderDistrict !== data.receiverDistrict && data.parcelWeight <= 3) {
        //     price = 120;
        // }
        // else if (data.parcelType === "non-document" && data.senderDistrict !== data.receiverDistrict && data.parcelWeight > 3) {
        //     price = 120 + (data.parcelWeight - 3) * 10;
        // }
        if (data.parcelType === "document" && data.deliveryDestination === "within-city") {
            price = 60;
        } else if (data.parcelType === "document" && data.deliveryDestination === "within-state") {
            price = 80;
        }
        else if (data.parcelType === "non-document" && data.deliveryDestination === "within-city" && data.weight <= 3) {
            price = 100;
        }
        else if (data.parcelType === "non-document" && data.deliveryDestination === "within-city" && data.weight > 3) {
            price = 100 + (data.weight - 3) * 10;
        }
        else if (data.parcelType === "non-document" && data.deliveryDestination === "within-state" && data.weight <= 3) {
            price = 120;
        }
        else if (data.parcelType === "non-document" && data.deliveryDestination === "within-state" && data.weight > 3) {
            price = 120 + (data.weight - 3) * 10;
        }
        setTotalPrice(price);
    };
    return (
        <div className="">
            <div className="md:w-1/2 px-4 py-10">
                <h1 className="text-2xl font-bold mb-2"> Pricing Calculator </h1>
                <p className="text-gray-500">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className="border-b border-b-gray-500"></div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 my-10">
                {/* calculator content */}
                <form onSubmit={handleSubmit(handleCalculatePrice)} className="md:w-1/2">
                    <div className="mb-5">
                        <label className="block text-lg font-medium text-gray-800 mb-2">
                            Parcel Type
                        </label>
                        <select {...register("parcelType", { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400">
                            <option value="document">Document</option>
                            <option value="non-document">Non-Document</option>
                        </select>
                        {errors.parcelType && <p className="text-red-500">Parcel type is required</p>}
                        {/* Delivery Destination */}
                        <div className="mt-5">
                            <label className="block text-lg font-medium text-gray-800 mb-2">
                                Delivery Destination
                            </label>
                            <select {...register("deliveryDestination", { required: true })} className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400">
                                <option value="within-city">Within City</option>
                                <option value="within-state">Within State</option>
                            </select>
                            {errors.deliveryDestination && <p className="text-red-500">Delivery destination is required</p>}
                        </div>
                        {/* Weight */}
                        <div className="mt-5">
                            <label className="block text-lg font-medium text-gray-800 mb-2">
                                Weight (kg)
                            </label>
                            <input {...register("weight", { required: true })}
                                type="number"
                                placeholder="Weight in kg"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400"
                            />
                            {errors.weight && <p className="text-red-500">Weight is required</p>}
                        </div>
                    </div>
                    {/* reset button and calculate button */}
                    <div className="flex gap-4 mt-10">
                        <button
                            type="reset"
                            className="px-6 py-3 border border-gray-300 rounded-xl text-gray-800 hover:bg-gray-100"
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-3 bg-lime-500 text-white rounded-xl hover:bg-lime-600"
                        >
                            Calculate Price
                        </button>
                    </div>
                </form>
                {/* pricing information */}
                <div className="md:w-1/2 bg-gray-100 p-6 rounded-xl">
                    <h1 className="text-4xl font-bold mb-2">Total Cost : ${totalPrice.toFixed(2)} </h1>
                </div>
            </div>
        </div>
    );
};

export default Pricing;