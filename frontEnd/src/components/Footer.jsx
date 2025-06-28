import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
    return (
        <section>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div>
                    <img src={assets.logo} className="mb-5 w-52" alt="" />
                    <p className="w-full md:w-2/3 text-gray-600">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptatem repellat vel nam fuga, numquam commodi
                        consequatur nostrum recusandae adipisci culpa
                        repellendus sit quas hic quos voluptate a quaerat
                        obcaecati rerum!
                    </p>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+251-912-567-890</li>
                        <li>beka@gebeya.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className="py-5 text-sm text-center">
                    copyright 2024@ gebeya.com - All Rights Reserved.
                </p>
            </div>
        </section>
    );
};

export default Footer;
