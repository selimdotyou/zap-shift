import bgImg from "../../assets/be-a-merchant-bg.png";
import Img from "../../assets/location-merchant.png";
const CustomerSatisfy = () => {
    return (
        // TODO: Customer Satisfy section
        <div className={"container mx-auto md:flex  my-16 px-4 py-16 bg-cover bg-[#03373D] bg-center rounded-2xl"} style={{ backgroundImage: `url(${bgImg})` }}>
            {/* Content for Customer Satisfaction section */}
            <div className="text-white md:w-1/2 px-8">
                <h1 className="text-4xl font-bold mb-6">Merchant and Customer Satisfaction is Our First Priority</h1>
                <p className="text-gray-300 text-lg mb-6">We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
            </div>
            <div className="md:w-1/2">
                <img src={Img} alt="Customer Satisfaction" className="w-full md:-mx-20 h-auto rounded-lg" />
            </div>
        </div>
    );
};

export default CustomerSatisfy;