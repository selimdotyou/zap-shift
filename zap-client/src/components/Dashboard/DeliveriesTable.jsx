import { Link } from "react-router-dom";

const DeliveriesTable = ({ deliveries = [], handleDelete }) => {
    console.log(deliveries);

    return (
        <div className="w-full overflow-x-auto mt-6">
            <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-100 text-left">
                    <tr>
                        <th className="py-2 px-4 border-b">Cons. ID</th>
                        <th className="py-2 px-4 border-b">Recipient Info</th>
                        <th className="py-2 px-4 border-b">Delivery Status</th>
                        <th className="py-2 px-4 border-b">Amount</th>
                        <th className="py-2 px-4 border-b">Payment</th>
                        <th className="py-2 px-4 border-b">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {deliveries.length === 0 ? (
                        <tr>
                            <td colSpan={6} className="text-center py-4">
                                No deliveries found.
                            </td>
                        </tr>
                    ) : (
                        deliveries.map((delivery) => (
                            <tr key={delivery._id} className="hover:bg-gray-50">
                                {/* Cons. ID */}
                                <td className="py-2 px-4">{delivery._id.slice(-6).toUpperCase()}</td>

                                {/* Recipient Info */}
                                <td className="py-2 px-4 whitespace-pre-line">
                                    {delivery?.receiverName}{"\n"}
                                    {delivery?.receiverAddress}{"\n"}
                                    {delivery?.receiverEmail}
                                </td>

                                {/* Delivery Status */}
                                <td className="py-2 px-4 font-semibold text-green-500">
                                    {delivery?.deliveryStatus === "delivered" ? "Delivered" : "In Transit"}
                                </td>

                                {/* Amount */}
                                <td className="py-2 px-4 whitespace-pre-line">
                                    {delivery?.parcelWeight} kg{"\n"}
                                    {delivery?.parcelType}{"\n"}
                                    {delivery?.price} Taka
                                </td>

                                {/* Payment */}
                                <td className="py-2 px-4 font-semibold text-orange-500">
                                    {delivery?.paymentStatus === "Paid" ? "Paid" : "Pending"}
                                </td>

                                {/* Action Buttons */}
                                <td className="py-2 px-4 flex items-center justify-center gap-2 flex-wrap">
                                    <Link to={`/dashboard/payment/${delivery._id}`}>
                                        <button disabled={delivery?.paymentStatus === "Paid"}  className="bg-lime-300 disabled:bg-gray-300 cursor-not-allowed text-black px-3 py-1 rounded">Pay</button>
                                    </Link>
                                    <Link to={`/dashboard/deliveries/${delivery._id}`} className="bg-blue-200 text-blue-600 px-3 py-1 rounded">
                                        View
                                    </Link>
                                    <button className="bg-red-200 text-red-600 px-3 py-1 rounded" onClick={() => handleDelete(delivery._id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default DeliveriesTable;