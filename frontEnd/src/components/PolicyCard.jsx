const PolicyCard = ({ image, paragraghOne, paragraghTwo }) => {
    return (
        <div>
            <img src={image} className="w-12 m-auto mb-5" alt="" />
            <p className="font-semibold">{paragraghOne}</p>
            <p className="text-gray-400">{paragraghTwo}</p>
        </div>
    );
};

export default PolicyCard;
