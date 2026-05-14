import { useForm } from "react-hook-form";
import Img from "../../assets/agent-pending.png";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const Rider = () => {

    const { data: serviceData, isLoading } = useQuery({
        queryKey: ['serviceCenters'],
        queryFn: async () => {
            const { data } = await axios.get("http://localhost:5000/service-centers");
            return data;
        }
    })

    const { register, handleSubmit, formState: { errors }, watch } = useForm()

    const handleRiderSubmit = (data) => {
        console.log(data);
    }

    if (isLoading) return <div className="text-center py-8">Loading service centers...</div>;

    // handle region and district options
        const regions = [...new Set(serviceData.map(center => center.region))];
        // const districts = [...new Set(serviceData.map(center => center.district))];
        // console.log(regions, districts);
    // handle region base district options
    const getDistrictsByRegion = (region) => {
        const districts = serviceData
            .filter(center => center.region === region)
            .map(center => center.district);
        return [...new Set(districts)];
    }
   

    return (
        <div className="container mx-auto p-5">
            {/* text contain to be a rider */}
            <div className="lg:w-1/2 mb-16">
                <h1 className="text-3xl font-bold mb-4">Be a Rider</h1>
                <p className="text-gray-700 text-lg mb-6">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>
            {/* form container */}
            <div className="border-t border-gray-300 pt-8">
                <h1 className="text-2xl font-bold mb-4">Tell us about yourself</h1>
                {/* md:  device separate two part */}
                <div className="md:flex md:justify-between md:items-start gap-10">
                    {/* left part by form  */}
                    <div className="md:w-1/2">
                        <form onSubmit={handleSubmit(handleRiderSubmit)}>
                            {/* name */}
                            <div>
                                <label className="block text-lg font-medium text-gray-800 mb-2"> YOur Name </label>
                                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400" {...register("name", { required: "Name is required" })} />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            </div>
                            {/* driver license */}
                            <div className="mt-5">
                                <label className="block text-lg font-medium text-gray-800 mb-2"> Driver License Number </label>
                                <input type="text" {...register("driverLicense", { required: "Driver license number is required" })} placeholder="Driver License Number" className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400" />
                                {errors.driverLicense && <p className="text-red-500 text-sm mt-1">{errors.driverLicense.message}</p>}
                            </div>
                            {/* email */}
                            <div className="mt-5">
                                <label className="block text-lg font-medium text-gray-800 mb-2"> Your Email </label>
                                <input type="email" {...register("email", { required: "Email is required", })} placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400" />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>
                            {/* your region selector */}
                            <div className="mt-5">
                                <label className="block text-lg font-medium text-gray-800 mb-2"> Your Region </label>
                                <select className="w-full  px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400" {...register("region", { required: "Region is required" })}>
                                    <option>Select your region</option>
                                    {
                                        regions.map((region, index) => (
                                            <option key={index}>{region}</option>
                                        ))
                                    }
                                </select>
                                {errors.region && <p className="text-red-500 text-sm mt-1">{errors.region.message}</p>}
                            </div>
                            {/* your district selector */}
                            <div className="mt-5">
                                <label className="block text-lg font-medium text-gray-800 mb-2"> Your District </label>
                                <select className="w-full  px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400" {...register("district", { required: "District is required" })}>
                                    <option>Select your district</option>
                                    {
                                        getDistrictsByRegion(watch("region")).map((district, index) => (
                                            <option key={index}>{district}</option>
                                        ))
                                    }
                                </select>
                                {errors.district && <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>}
                            </div>

                            {/* your phone number */}
                            <div className="mt-5">
                                <label className="block text-lg font-medium text-gray-800 mb-2"> Your Phone Number </label>
                                <input type="text" {...register("phone", { required: "Phone number is required" })} placeholder="Your Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400" />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                            </div>
                            {/* NID number */}
                            <div className="mt-5">
                                <label className="block text-lg font-medium text-gray-800 mb-2"> NID Number </label>
                                <input type="text" {...register("nid", { required: "NID number is required" })} placeholder="NID Number" className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400" />
                                {errors.nid && <p className="text-red-500 text-sm mt-1">{errors.nid.message}</p>}
                            </div>
                            {/* Bike Brand Model and Year */}
                            <div className="mt-5">
                                <label className="block text-lg font-medium text-gray-800 mb-2"> Bike Brand, Model and Year </label>
                                <input type="text" {...register("bikeInfo", { required: "Bike information is required" })} placeholder="Bike Brand, Model and Year" className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400" />
                                {errors.bikeInfo && <p className="text-red-500 text-sm mt-1">{errors.bikeInfo.message}</p>}
                            </div>
                            {/* Bike Registration Number */}
                            <div className="mt-5">
                                <label className="block text-lg font-medium text-gray-800 mb-2"> Bike Registration Number </label>
                                <input type="text" {...register("bikeRegistration", { required: "Bike registration number is required" })} placeholder="Bike Registration Number" className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400" />
                                {errors.bikeRegistration && <p className="text-red-500 text-sm mt-1">{errors.bikeRegistration.message}</p>}
                            </div>
                            {/* Tell Us About Yourself */}
                            <div className="mt-5">
                                <label className="block text-lg font-medium text-gray-800 mb-2"> Tell Us About Yourself </label>
                                <textarea {...register("about", { required: "Please tell us about yourself" })} placeholder="Tell Us About Yourself" className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-lime-400" rows="4" />
                                {errors.about && <p className="text-red-500 text-sm mt-1">{errors.about.message}</p>}
                            </div>
                            {/* submit button */}
                            <button className="mt-5 w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl text-lg font-medium">
                                Submit
                            </button>
                        </form>
                    </div>
                    {/* right part by image */}
                    <div className="md:w-1/2">
                        <img src={Img} alt="Be a Rider" className="w-full h-auto rounded-xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Rider;