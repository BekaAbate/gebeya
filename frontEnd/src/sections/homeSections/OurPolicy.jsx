import { policy } from "../../assets/frontend_assets/assets";
import PolicyCard from "../../components/PolicyCard";

const OurPolicy = () => {
    return (
        <section className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
            {policy.map((item) => (
                <PolicyCard
                    key={item._id}
                    image={item.image}
                    paragraghOne={item.paragraghOne}
                    paragraghTwo={item.paragraghTwo}
                />
            ))}
        </section>
    );
};

export default OurPolicy;
