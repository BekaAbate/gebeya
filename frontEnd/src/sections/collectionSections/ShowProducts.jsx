import { useContext, useEffect, useState } from "react";
import Title from "../../components/Title";
import ProductCard from "../../components/ProductCard";
import { ShopContext } from "../../context/ShopContext";

const ShowProducts = ({ category, subCategory }) => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [filterProducts, setFilterProducts] = useState([]);
    const [sortType, setSortType] = useState("relavent");

    const applyFilter = () => {
        let productsClone = products.slice();

        if (showSearch && search)
            productsClone = productsClone.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase()),
            );

        if (category.length > 0)
            productsClone = productsClone.filter((item) =>
                category.includes(item.category),
            );
        if (subCategory.length > 0)
            productsClone = productsClone.filter((item) =>
                subCategory.includes(item.subCategory),
            );

        setFilterProducts(productsClone);
    };

    const sortProducts = (e) => {
        let filterProductsClone = filterProducts.slice();
        switch (sortType) {
            case "low-high":
                setFilterProducts(
                    filterProductsClone.sort((a, b) => a.price - b.price),
                );
                break;

            case "high-low":
                setFilterProducts(
                    filterProductsClone.sort((a, b) => b.price - a.price),
                );
                break;

            default:
                applyFilter();
                break;
        }
    };

    useEffect(() => {
        applyFilter();
    }, [category, subCategory, search, showSearch, products]);
    useEffect(() => {
        sortProducts();
    }, [sortType]);
    return (
        <section className="flex-1">
            <div className="flex justify-between text-base sm:text-2xl mb-4">
                <Title textOne={"ALL"} textTwo={"COLLECTIONS"} />
                {/* sort products */}
                <select
                    onChange={(e) => setSortType(e.target.value)}
                    className="border-2 border-gray-300 text-sm px-2"
                >
                    <option value="relavent">sort by: Relavent</option>
                    <option value="low-high">sort by: Low to High</option>
                    <option value="high-low">sort by: High to Low</option>
                </select>
            </div>
            {/* map products */}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                {filterProducts.map((item) => (
                    <ProductCard
                        key={item._id}
                        name={item.name}
                        id={item._id}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default ShowProducts;
