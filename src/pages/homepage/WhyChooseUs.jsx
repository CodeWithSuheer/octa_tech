import React from 'react'
import { FaLocationArrow } from "react-icons/fa";

const WhyChooseUs = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-4 sm:px-6 py-10 lg:py-24 md:flex-row flex-col">

                    <div className="flex justify-center lg:justify-end items-center lg:max-w-lg lg:w-full md:w-1/2 w-full mb-6 md:mb-0">
                        <img
                            alt="hero"
                            className="object-contain h-full w-full xl:h-full xl:w-full sm:px-10"
                            src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2210.png?v=1711134978"
                        />
                    </div>

                    <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-3 flex flex-col md:items-start md:text-left">
                        <div className="lg:max-w-xl pt-10">
                            <h3 className="text-md uppercase font-semibold text-blue-600 lg:text-md">Why Choose Us</h3>
                            <h2 className="baloo my-2.5 text-2xl font-semibold capitalize text-black lg:text-3xl  xl:text-4xl">More Than 24+ Years Experience We Provide IT Services</h2>
                            <h2 className="text-sm font-normal text-black">It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point. It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point.</h2>


                            <div className="mission_bar grid grid-cols-1 gap-6 lg:grid-cols-1 xl:grid-cols-2 lg:gap-5 my-7 lg:my-5">

                                <div className="sec_1 flex items-center gap-4">
                                    <div className="icon p-4 rounded-full">
                                        <img className='h-full w-[11rem]' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2211.png?v=1711136644" alt="" />
                                    </div>
                                    <div className="data">
                                        <h3 className='baloo text-xl text-black font-semibold'>Business Grow</h3>
                                        <h3 className='text-sm'>It is a long establish fact that a reader will be lorem ipsum</h3>
                                    </div>
                                </div>

                                <div className="sec_1 flex items-center gap-4">
                                    <div className="icon p-4 rounded-full">
                                        <img className='h-full w-[11rem]' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2211_1.png?v=17111366441" alt="" />
                                    </div>
                                    <div className="data">
                                        <h3 className='baloo text-xl text-black font-semibold'>Quality Products</h3>
                                        <h3 className='text-sm'>It is a long establish fact that a reader will be lorem ipsum</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="hero_section_buttons flex items-start xs:items-center flex-col-reverse sm:flex-row gap-5 lg:gap-10 mt-10">
                                <button className="max-w-40 flex items-center gap-2 px-5 py-3 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Learn More <FaLocationArrow />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyChooseUs
