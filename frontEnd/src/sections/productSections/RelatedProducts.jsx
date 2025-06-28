import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import ProductCard from "../../components/ProductCard";
import Title from "../../components/Title";

const RelatedProducts = ({ category, subCategory, setSize }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter(
                (item) => category === item.category,
            );
            productsCopy = productsCopy.filter(
                (item) => subCategory === item.subCategory,
            );

            setRelated(productsCopy.slice(0, 5));
        }
    }, [products]);

    return (
        <section className="my-24">
            <div className="text-center text-3xl py-2">
                <Title textOne={"RELATED"} textTwo={"PRODUCTS"} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {related.map((item) => (
                    <ProductCard
                        onClick={() => {
                            setSize("");
                        }}
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

export default RelatedProducts;
