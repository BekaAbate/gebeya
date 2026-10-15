const ProductCardSkeleton = () => {
    return (
        <div className="border border-gray-200 overflow-hidden animate-pulse flex flex-col">
            <div className="bg-gray-200 w-full aspect-[3/4] sm:aspect-[4/5]"></div>
            <div className="px-2 pt-3 pb-1">
                <div className="h-3.5 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div className="px-2 pb-2">
                <div className="h-3.5 bg-gray-200 rounded w-1/3"></div>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
