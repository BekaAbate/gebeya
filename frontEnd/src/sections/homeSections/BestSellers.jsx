import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "../../components/Title";
import ProductCard from "../../components/ProductCard";

const BestSellers = () => {
    const { products } = useContext(ShopContext);
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(() => {
        const bestsellerProducts = products.filter((item) => item.bestseller);
        setBestSellers(bestsellerProducts.slice(0, 5));
    }, [products]);
    return (
        <section className="my-10">
            <div className="text-center py-8 text-3xl">
                <Title textOne="BEST" textTwo="SELLERS" />
                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia doloribus asperiores natus quod odio eaqu.
                </p>
            </div>
            {/* rendering products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {bestSellers.map((item) => (
                    <ProductCard
                        key={item._id}
                        id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </section>
    );
};

export default BestSellers;
