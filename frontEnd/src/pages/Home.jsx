import BestSellers from "../sections/homeSections/BestSellers";
import Hero from "../sections/homeSections/Hero";
import LatestCollection from "../sections/homeSections/LatestCollection";
import Newsletter from "../sections/homeSections/Newsletter";
import OurPolicy from "../sections/homeSections/OurPolicy";
const Home = () => {
    return (
        <div>
            <Hero />
            <LatestCollection />
            <BestSellers />
            <OurPolicy />
            <Newsletter />
        </div>
    );
};

export default Home;
