import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductGridSkeleton = ({
    count = 5,
    gridClassName = "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6",
}) => {
    return (
        <div className={gridClassName}>
            {Array.from({ length: count }).map((_, index) => (
                <ProductCardSkeleton key={index} />
            ))}
        </div>
    );
};

export default ProductGridSkeleton;
