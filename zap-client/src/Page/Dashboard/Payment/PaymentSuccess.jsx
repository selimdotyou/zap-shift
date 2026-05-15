import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const axiosPublic = useAxiosPublic();
    useEffect(()=>{
        if(sessionId){
            axiosPublic.patch(`/payment-success?session_id=${sessionId}`)
            .then(res=>{
                console.log(res.data);
            })
            .catch(err=>{
                console.error(err);
            })
        } else {
            // if no session id in url then redirect to deliveries page
            window.location.href = "/dashboard/deliveries";
        }
    },[sessionId])
    return (
        <div>
            <h1 className="text-green-500 text-3xl">Payment Successful</h1>
            <p>Thank you for your payment!</p>
            <p>Session ID: {sessionId}</p>
        </div>
    );
};

export default PaymentSuccess;