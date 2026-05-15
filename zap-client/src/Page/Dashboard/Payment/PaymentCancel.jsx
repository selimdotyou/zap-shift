import { Link } from "react-router-dom";

const PaymentCancel = () => {
    return (
        <div>
            <h1 className="text-red-500 text-3xl">Payment Cancelled</h1>
            <p>Your payment was cancelled.</p>
            <Link to="/dashboard/deliveries">
                <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Go Back to Deliveries</button>
            </Link>
        </div>
    );
};

export default PaymentCancel;