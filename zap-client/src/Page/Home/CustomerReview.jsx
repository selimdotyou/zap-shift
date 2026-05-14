import CustomerImg from "../../assets/customer-top.png";
import axios from "axios";
import ReviewSection from "./ReviewSection";
import { useQuery } from "@tanstack/react-query";
const CustomerReview = () => {
    
    const { data: reviewData, isLoading } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const { data } = await axios.get("http://localhost:5000/reviews");
            return data;
        }
    });

    if (isLoading) {
        return <div className="text-center py-8">Loading reviews...</div>;
    }

    return (
        <div>
            <div className="max-w-4xl mx-auto">
                <img src={CustomerImg} alt="Customer Review" className="w-44 h-18 mx-auto" />
                <h1 className="text-3xl font-bold text-center mt-4 mb-2">What our customers are sayings</h1>
                <p className="text-gray-600 text-center mb-8">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <div className="">
               
                <ReviewSection reviewData={reviewData} />
            </div>
        </div>
    );
};

export default CustomerReview;