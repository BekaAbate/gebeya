import { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";

const Filters = ({ category, setCategory, subCategory, setSubCategory }) => {
    const [showFilter, setShowFilter] = useState(false);

    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory((prev) =>
                prev.filter((item) => item !== e.target.value),
            );
        } else {
            setCategory((prev) => [...prev, e.target.value]);
        }
    };
    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory((prev) =>
                prev.filter((item) => item !== e.target.value),
            );
        } else {
            setSubCategory((prev) => [...prev, e.target.value]);
        }
    };

    return (
        <section className="min-w-60">
            <p
                onClick={() => setShowFilter((prev) => !prev)}
                className="my-2 text-xl flex items-center cursor-pointer gap-2"
            >
                FILTERS
                <img
                    className={`h-3 sm:hidden transition duration-300 ${showFilter ? "rotate-90" : ""}`}
                    src={assets.dropdown_icon}
                    alt=""
                />
            </p>
            {/* category filter */}

            <div
                className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}
            >
                <p className="mb-3 text-sm font-medium">CATEGORIES</p>
                <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                    <p className="flex gap-2">
                        <input
                            onChange={toggleCategory}
                            type="checkbox"
                            className="w-3"
                            value={"Men"}
                        />{" "}
                        Men
                    </p>
                    <p className="flex gap-2">
                        <input
                            onChange={toggleCategory}
                            type="checkbox"
                            className="w-3"
                            value={"Women"}
                        />{" "}
                        Women
                    </p>
                    <p className="flex gap-2">
                        <input
                            onChange={toggleCategory}
                            type="checkbox"
                            className="w-3"
                            value={"Kids"}
                        />{" "}
                        Kids
                    </p>
                </div>
            </div>
            {/* subCategory filter */}
            <div
                className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" : "hidden"} sm:block`}
            >
                <p className="mb-3 text-sm font-medium">TYPE</p>
                <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                    <p className="flex gap-2">
                        <input
                            onChange={toggleSubCategory}
                            type="checkbox"
                            className="w-3"
                            value={"Topwear"}
                        />{" "}
                        Topwear
                    </p>
                    <p className="flex gap-2">
                        <input
                            onChange={toggleSubCategory}
                            type="checkbox"
                            className="w-3"
                            value={"Bottomwear"}
                        />{" "}
                        Bottomwear
                    </p>
                    <p className="flex gap-2">
                        <input
                            onChange={toggleSubCategory}
                            type="checkbox"
                            className="w-3"
                            value={"Winterwear"}
                        />{" "}
                        Winterwear
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Filters;
