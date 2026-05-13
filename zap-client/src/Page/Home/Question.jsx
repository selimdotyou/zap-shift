import "flowbite";

const Question = () => {
    return (
        <div className="my-8 max-w-4xl mx-auto px-4">

            <h3 className="font-bold text-3xl text-center mb-2">
                Frequently Asked Questions
            </h3>

            <p className="text-gray-600 text-center mb-8">
                Enhance posture, mobility, and well-being effortlessly.
            </p>

            <div
                id="accordion-flush"
                data-accordion="collapse"
                className="border border-gray-200 rounded-xl p-4"
            >

                {/* FAQ 1 */}
                <h2 id="accordion-flush-heading-1">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-700 border-b border-gray-200"
                        data-accordion-target="#accordion-flush-body-1"
                        aria-expanded="true"
                        aria-controls="accordion-flush-body-1"
                    >
                        <span>How does this posture corrector work?</span>

                        <svg
                            data-accordion-icon
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m5 15 7-7 7 7"
                            />
                        </svg>
                    </button>
                </h2>

                <div
                    id="accordion-flush-body-1"
                    className="hidden"
                    aria-labelledby="accordion-flush-heading-1"
                >
                    <div className="py-5">
                        <p className="text-gray-500">
                            A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.
                        </p>
                    </div>
                </div>

                {/* FAQ 2 */}
                <h2 id="accordion-flush-heading-2">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-700 border-b border-gray-200"
                        data-accordion-target="#accordion-flush-body-2"
                        aria-expanded="false"
                        aria-controls="accordion-flush-body-2"
                    >
                        <span>Is it suitable for all ages and body types?</span>

                        <svg
                            data-accordion-icon
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m5 15 7-7 7 7"
                            />
                        </svg>
                    </button>
                </h2>

                <div
                    id="accordion-flush-body-2"
                    className="hidden"
                    aria-labelledby="accordion-flush-heading-2"
                >
                    <div className="py-5">
                        <p className="text-gray-500">
                            Yes, our posture corrector is designed to be suitable for various ages and body types. It features adjustable straps and a comfortable design to ensure a good fit for most users.
                        </p>
                    </div>
                </div>
                {/* FAQ 3*/}
                <h2 id="accordion-flush-heading-3">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-700 border-b border-gray-200"
                        data-accordion-target="#accordion-flush-body-3"
                        aria-expanded="false"
                        aria-controls="accordion-flush-body-3"
                    >
                        <span>Does it really help with back pain and posture improvement?</span>

                        <svg
                            data-accordion-icon
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m5 15 7-7 7 7"
                            />
                        </svg>
                    </button>
                </h2>

                <div
                    id="accordion-flush-body-3"
                    className="hidden"
                    aria-labelledby="accordion-flush-heading-3"
                >
                    <div className="py-5">
                        <p className="text-gray-500">
                            Yes, many users have reported that using a posture corrector has helped alleviate back pain and improve their posture. By providing support and encouraging proper alignment, it can help reduce strain on muscles and joints, leading to improved comfort and posture over time.
                        </p>
                    </div>
                </div>
                {/* FAQ 4 */}
                <h2 id="accordion-flush-heading-4">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-700 border-b border-gray-200"
                        data-accordion-target="#accordion-flush-body-4"
                        aria-expanded="false"
                        aria-controls="accordion-flush-body-4"
                    >
                        <span>Does it have smart features like vibration alerts?</span>

                        <svg
                            data-accordion-icon
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m5 15 7-7 7 7"
                            />
                        </svg>
                    </button>
                </h2>

                <div
                    id="accordion-flush-body-4"
                    className="hidden"
                    aria-labelledby="accordion-flush-heading-4"
                >
                    <div className="py-5">
                        <p className="text-gray-500">
                            Yes, our posture corrector is equipped with smart features, including vibration alerts. These alerts are designed to gently remind you to correct your posture when you slouch or deviate from proper alignment, helping you maintain good posture throughout the day.
                        </p>
                    </div>
                </div>
                {/* FAQ 5 */}
                <h2 id="accordion-flush-heading-5">
                    <button
                        type="button"
                        className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-700 border-b border-gray-200"
                        data-accordion-target="#accordion-flush-body-5"
                        aria-expanded="false"
                        aria-controls="accordion-flush-body-5"
                    >
                        <span>How will I be notified when the product is back in stock?</span>

                        <svg
                            data-accordion-icon
                            className="w-5 h-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m5 15 7-7 7 7"
                            />
                        </svg>
                    </button>
                </h2>

                <div
                    id="accordion-flush-body-5"
                    className="hidden"
                    aria-labelledby="accordion-flush-heading-5"
                >
                    <div className="py-5">
                        <p className="text-gray-500">
                            When the product is back in stock, you will receive a notification via email or through our website if you have signed up for updates. We recommend subscribing to our newsletter or creating an account on our website to stay informed about restocks and other updates.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Question;