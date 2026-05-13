import { useEffect, useState } from "react";
import CustomerImg from "../../assets/customer-top.png";
import axios from "axios";
import ReviewSection from "./ReviewSection";
const CustomerReview = () => {
    const [reviewData, setReviewData] = useState();
    const [loading, setLoading] = useState(true);
    // Fetch review data from the server
    const fetchReviews = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/reviews");

            setReviewData(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching reviews:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    if (loading) {
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