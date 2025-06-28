import { assets } from "../assets/frontend_assets/assets";
import Title from "../components/Title";
import Newsletter from "../sections/homeSections/Newsletter";

const About = () => {
    return (
        <div>
            <div className="text-2xl text-center pt-8 border-t">
                <Title textOne={"ABOUT"} textTwo={"US"} />
            </div>
            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img
                    className="w-full md:max-w-[450px]"
                    src={assets.about_img}
                    alt=""
                />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Exercitationem laboriosam id suscipit neque modi
                        ipsam ducimus molestiae obcaecati recusandae officiis
                        reprehenderit eligendi in ipsa eos, cum quo alias
                        nostrum ullam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam labore impedit facere id et, inventore earum nemo
                        aut. Delectus ex tenetur sapiente dicta aspernatur
                        recusandae quae ducimus alias animi amet! Lorem ipsum
                        dolor sit amet consectetur adipisicing eli.
                    </p>
                    <b className="text-gray-800">Our Mission</b>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quaerat in sapiente a, quibusdam voluptatem,
                        molestiae consequuntur molestias dolorum, sit iste
                        libero expedita iure omnis aspernatur accusantium? A
                        similique iste vitae.
                    </p>
                </div>
            </div>
            <div className="text-xl py-4">
                <Title textOne={"WHY"} textTwo={"CHOOSE US"} />
            </div>
            <div className="flex flex-col md:flex-row text-sm mb-20 gap-1">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Quality Assrance:</b>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam obcaecati impedit odio quisquam alias quia, sequi
                        nobis nisi, sint asperiores esse sunt! Maxime aperiam
                        quasi aliquam quisquam dolorem, temporibus corrupti.
                    </p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Convenience:</b>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam obcaecati impedit odio quisquam alias quia, sequi
                        nobis nisi, sint asperiores esse sunt! Maxime aperiam
                        quasi aliquam quisquam dolorem, temporibus corrupti.
                    </p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Exceptional Customer Service:</b>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam obcaecati impedit odio quisquam alias quia, sequi
                        nobis nisi, sint asperiores esse sunt! Maxime aperiam
                        quasi aliquam quisquam dolorem, temporibus corrupti.
                    </p>
                </div>
            </div>
            <Newsletter />
        </div>
    );
};

export default About;
