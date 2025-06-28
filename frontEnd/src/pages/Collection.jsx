import { useState } from "react";
import Filters from "../sections/collectionSections/Filters";
import ShowProducts from "../sections/collectionSections/ShowProducts";
const Collection = () => {
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    return (
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
            <Filters
                category={category}
                setCategory={setCategory}
                subCategory={subCategory}
                setSubCategory={setSubCategory}
            />
            <ShowProducts category={category} subCategory={subCategory} />
        </div>
    );
};

export default Collection;
