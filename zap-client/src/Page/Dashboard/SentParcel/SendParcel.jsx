import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SendParcel = () => {
  const pickupTime = "4pm-7pm";
  const { user } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const parcelType = watch("parcelType");

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
  })

  if (isLoading) return <p className="p-4">Loading...</p>;

  const regions = [...new Set(serviceArea.map(center => center.region))];

  const getDistrictsByRegion = (region = "") => {
    const districts = serviceArea
      .filter(center => (center.region || "").toLowerCase() === region.toLowerCase())
      .map(center => center.district);

    return [...new Set(districts)];
  };

  const handleBooking = async (data) => {
    let price = 0;
    if (data.parcelType === "document" && data.senderDistrict === data.receiverDistrict) price = 60;
    else if (data.parcelType === "document") price = 80;
    else if (data.parcelType === "non-document" && data.senderDistrict === data.receiverDistrict && data.parcelWeight <= 3) price = 100;
    else if (data.parcelType === "non-document" && data.senderDistrict === data.receiverDistrict) price = 100 + (data.parcelWeight - 3) * 10;
    else if (data.parcelType === "non-document" && data.senderDistrict !== data.receiverDistrict && data.parcelWeight <= 3) price = 120;
    else price = 120 + (data.parcelWeight - 3) * 10;
    data.price = price;
   try {
    await createParcel(data);
    toast.success("Parcel created successfully!");
    navigate("/dashboard/my-parcels");
   } catch (error) {
    toast.error(error.message);
   }
  };

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Send A Parcel</h1>
      <p className="text-gray-600 mb-6">Enter your parcel details</p>

      <form onSubmit={handleSubmit(handleBooking)} className="bg-white rounded-xl shadow p-4 md:p-6 space-y-6">

        {/* Parcel Type */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex items-center gap-2">
            <input type="radio" value="document" defaultChecked className="radio" {...register("parcelType", { required: true })} />
            <span>Document</span>
          </div>
          <div className="flex items-center gap-2">
            <input type="radio" value="non-document" className="radio" {...register("parcelType", { required: true })} />
            <span>Non Document</span>
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

            <input placeholder="Name" className="w-full px-3 py-2 border rounded-xl" {...register("senderName", { required: true })} />
            {errors.senderName && <span className="text-red-500 text-sm">Required</span>}

            <input placeholder="Address" className="w-full px-3 py-2 border rounded-xl" {...register("senderAddress", { required: true })} />
            {errors.senderAddress && <span className="text-red-500 text-sm">Required</span>}

            <input placeholder="Email" className="w-full px-3 py-2 border rounded-xl" value={user?.email} {...register("senderEmail", { required: true })} />
            {errors.senderEmail && <span className="text-red-500 text-sm">Required</span>}

            <input placeholder="Phone" className="w-full px-3 py-2 border rounded-xl" {...register("senderPhone", { required: true })} />
            {errors.senderPhone && <span className="text-red-500 text-sm">Required</span>}

            <select className="w-full px-3 py-2 border rounded-xl" {...register("senderRegion", { required: true })}>
              <option value="">Select Region</option>
              {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
            </select>

            <select className="w-full px-3 py-2 border rounded-xl" {...register("senderDistrict", { required: true })}>
              <option value="">Select District</option>
              {getDistrictsByRegion(watch("senderRegion")).map((d, i) => <option key={i} value={d}>{d}</option>)}
            </select>

            <textarea placeholder="Pickup Instructions" className="w-full px-3 py-2 border rounded-xl" rows={3} {...register("pickupInstruction", { required: true })}></textarea>
          </div>

          {/* Receiver Info */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Receiver Details</h2>

            <input placeholder="Name" className="w-full px-3 py-2 border rounded-xl" {...register("receiverName", { required: true })} />
            {errors.receiverName && <span className="text-red-500 text-sm">Required</span>}

            <input placeholder="Address" className="w-full px-3 py-2 border rounded-xl" {...register("receiverAddress", { required: true })} />
            {errors.receiverAddress && <span className="text-red-500 text-sm">Required</span>}

            <input placeholder="Email" className="w-full px-3 py-2 border rounded-xl" {...register("receiverEmail", { required: true })} />
            {errors.receiverEmail && <span className="text-red-500 text-sm">Required</span>}

            <input placeholder="Phone" className="w-full px-3 py-2 border rounded-xl" {...register("receiverPhone", { required: true })} />
            {errors.receiverPhone && <span className="text-red-500 text-sm">Required</span>}

            <select className="w-full px-3 py-2 border rounded-xl" {...register("receiverRegion", { required: true })}>
              <option value="">Select Region</option>
              {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
            </select>

            <select className="w-full px-3 py-2 border rounded-xl" {...register("receiverDistrict", { required: true })}>
              <option value="">Select District</option>
              {getDistrictsByRegion(watch("receiverRegion")).map((d, i) => <option key={i} value={d}>{d}</option>)}
            </select>

            <textarea placeholder="Pickup Instructions" className="w-full px-3 py-2 border rounded-xl" rows={3} {...register("pickupInstruction", { required: true })}></textarea>
          </div>

        </div>

        <p className="text-gray-700">* PickUp Time {pickupTime} Approx.</p>

        <button className="w-full bg-pink-500 text-white py-3 rounded-xl hover:bg-pink-600 transition-colors">Proceed to Confirm Booking</button>
      </form>
    </div>
  );
};

export default SendParcel;