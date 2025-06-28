import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductCard = ({ id, image, name, price, onClick = () => {} }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link
            onClick={onClick}
            className="text-gray cursor-pointer border"
            to={`/product/${id}`}
        >
            <div className="overflow-hidden">
                <img
                    className="hover:scale-110 transition ease-in-out"
                    src={image[0]}
                    alt=""
                />
            </div>
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className="text-sm font-medium">
                {currency}
                {price}
            </p>
        </Link>
    );
};

export default ProductCard;
