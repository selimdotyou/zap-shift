import Banner from "./Banner";
import Brands from "./Brands";
import CustomerReview from "./CustomerReview";
import CustomerSatisfy from "./CustomerSatisfy";
import Features from "./Features";
import Question from "./Question";
import Services from "./Services";
import Work from "./Work";

const Home = () => {
    return (
        <div>
            <Banner />
            <Work />
            <Services />
            <Brands />
            <Features />
            <CustomerSatisfy />
            <CustomerReview />
            <Question />
        </div>
    );
};

export default Home;