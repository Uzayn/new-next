import Image from "next/image";

import { motion } from "framer-motion";
import Slider from "react-slick";

import FeaturesCard from "./FeaturesCard";
import SimpleSlider from "./slider";
import Waitlist from "./Waitlist";

import { phoneRight } from "@/assets";
import { phoneLeft } from "@/assets";
import { RectangleLeft } from "@/assets";

import { Features } from "@/constants";

function Discover() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        swipeToSlide: false,
    };

    const titleEffect = {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.2,
            delay: 0.2
        },
    };

    const verticalLeft = {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            delay: 0.2
        }
    }

    const horizontal = {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.2,
            bounce: 0.2,
            delay: 0.2
        }
    }

    return (

        <section id="features">
            <section className={`px-6 lg:px-[120px] py-[40px] md:py-[70px] bg-pink`}>
                <motion.div
                    whileInView={titleEffect}
                    initial={{ y: "-80px", opacity: 0 }}
                    className="text-center content-center">
                    <h1 className="font-extrabold font-MTS text-[35px] md:text-[45px] text-offBlack leading-[52px]  md:pb-[60px]">
                        Our Solutions
                    </h1>
                </motion.div>

                <div className={`hidden md:flex flex-wrap justify-center`}>
                    {Features.map((card, index) => (
                        <motion.div
                            key={card.id} // Move the key prop to the outermost element being iterated over
                            initial={{ opacity: 0, y: '-100px' }}
                            whileInView={verticalLeft}
                            className={`${index === Features.length - 2
                                ? "mx-10 sm:mx-[14px] md:mx-[75px]"
                                : "mx-10 sm:mx-[14px]"
                                } ${index === Features.length - 1 ? "mb-0" : null} mx-2`}
                        >
                            <FeaturesCard {...card} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    whileInView={titleEffect}
                    initial={{ y: "80px", opacity: 0 }} className="md:hidden py-[25px]">
                    <Slider {...settings}>
                        {Features.map((card) => (
                            <div className="px-[15px]" key={card.id}>
                                <FeaturesCard  {...card} />
                            </div>
                        ))}
                    </Slider>
                </motion.div>
            </section>

            <section className={`px-6 lg:px-[120px] py-[40px] md:py-[70px]`}>
                <motion.div
                    whileInView={titleEffect}
                    initial={{ y: "-40px", opacity: 0 }}
                    className="flex">
                    <Image src={RectangleLeft} alt="" className="mr-[16px]" />
                    <h1 className="font-bold font-MTS text-offBlack text-[30px] md:text-[36px] md:leading-[44px] w-fit md:w-[685px]">
                        Manage Your Season With {" "}
                        Easy-to-Use <br className="flex md:hidden" /> Support Tools
                    </h1>
                </motion.div>
                <div className={`flex md:flex-row flex-col`}>
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        whileInView={horizontal}
                        className={`flex-1 flex justify-center items-start flex-col order-2 md:order-1`}>
                        <ol className="text-grey text-[16px]">
                            <div className="flex mt-[38.77px] mb-[35px] md:mb-[70px]">
                                <span className="flex justify-center items-center font normal mr-[15px] text-grey text-[24px] border border-accentGreen w-[52px] h-[52px] rounded-full p-6">
                                    1
                                </span>
                                <li className="w-fit sm:w-[677px] text-[20px] md:text-[28px] text-grey font-normal leading-9">
                                    The knowledge Hub provides you with on-demand extension
                                    information that you can easily apply throughout the season from pre-planting to
                                    post-harvest
                                </li>
                            </div>
                            <div className="flex">
                                <span className="flex justify-center items-center font normal mr-[15px] text-grey text-[24px] border border-accentGreen w-[52px] h-[52px] rounded-full p-6">
                                    2
                                </span>
                                <li className="w-fit sm:w-[677px] text-[20px] md:text-[28px] text-grey font-normal leading-9">
                                    The operations schedule allows you to plan your{" "}
                                    <br className="hidden md:flex" /> farming operations from the
                                    first activity to the last. <br className="hidden md:flex" />{" "}
                                    It also notifies you when you are due for the next activity
                                </li>
                            </div>
                        </ol>
                    </motion.div>
                    <motion.div
                        initial={{ x: '-100%', opacity: 0 }}
                        whileInView={horizontal}
                        className={`flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 order-1 md:order-2`}>
                        <Image
                            src={phoneRight}
                            alt=""
                            className="w-2/3 sm:w-2/3 md:w-auto"
                        />
                    </motion.div>
                </div>
            </section>


            <section className={`px-6 lg:px-[120px] py-[40px] md:py-[70px] bg-greenGrow`}>
                <motion.div
                    whileInView={titleEffect}
                    initial={{ y: "-40px", opacity: 0 }}
                    className="flex">
                    <Image src={RectangleLeft} alt="" className="mr-[16px]" />
                    <h1 className="font-bold font-MTS text-white text-[30px] md:text-[36px] md:leading-[44px] w-fit md:w-[927px]">
                        Calculate your projections for the season{" "}
                        <br className="hidden sm:flex" /> and evaluate your activities as
                        you progress <br className="hidden sm:flex" /> during the season
                    </h1>
                </motion.div>
                <div className={`flex md:flex-row flex-col`}>
                    <motion.div
                        initial={{ x: '-100%', opacity: 0 }}
                        whileInView={horizontal}
                        className={`flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10`}>
                        <Image
                            src={phoneLeft}
                            alt=""
                            className="w-2/3 sm:w-2/3 md:w-auto"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ x: '100%', opacity: 0 }}
                        whileInView={horizontal}
                        className={`flex-1 flex justify-center items-start flex-col`}>
                        <ol className="text-grey text-[16px]">
                            <div className="flex mt-[38.77px] mb-[35px] md:mb-[70px]">
                                <span className="flex justify-center items-center font normal mr-[15px] text-white text-[24px] border border-accentGreen w-[52px] h-[52px] rounded-full p-6">
                                    3
                                </span>
                                <li className="w-fit sm:w-[677px] text-[20px] md:text-[28px] text-white font-normal leading-9">
                                    The operations calculator allows you  to make your projections for the the season. Know what you need and what to expect
                                </li>
                            </div>
                            <div className="flex">
                                <span className="flex justify-center items-center font normal mr-[15px] text-white text-[24px] border border-accentGreen w-[52px] h-[52px] rounded-full p-6">
                                    4
                                </span>
                                <li className="w-fit sm:w-[677px] text-[20px] md:text-[28px] text-white font-normal leading-9">
                                    Get interactive reports regarding your farm activities all season to improve your operations
                                </li>
                            </div>
                        </ol>
                    </motion.div>
                </div>
            </section>

            <SimpleSlider />

            {/* <Download /> */}

            <Waitlist />
        </section>
    )
};

export default Discover;