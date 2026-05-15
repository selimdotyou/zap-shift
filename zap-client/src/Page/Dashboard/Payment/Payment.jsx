import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const Payment = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const { data: parcel, isLoading } = useQuery({
        queryKey: ['parcel', id],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/parcel/${id}`);
            return data;
        }
    });

    // payment form with stripe checkout button
    const handlePayment = async () => {
        const paymentInfo = {
            parcelId: id,
            parcelName: parcel?.parcelName,
            cost: parcel?.price,
            senderEmail: parcel?.senderEmail

        }
        try {
            const { data } = await axiosPublic.post('/create-payment-intent', paymentInfo);
            console.log(data);
            window.location.href = data.url; // redirect to stripe checkout page
        }
        catch (error) {
            toast.error(error.message || "Payment failed");
        }

    }
    if (isLoading) return <p>Loading...</p>
    console.log(parcel);
    return (
        <div>
            {/* payment form with stripe checkout button */}
            <h1 className="text-2xl font-bold">Payment for {parcel?.parcelName}</h1>
            <p>Amount to Pay: {parcel?.price} Taka</p>
            <button onClick={handlePayment} className="bg-green-500 text-white px-4 py-2 rounded mt-4">Pay with Stripe</button>
        </div>
    );
};

export default Payment;