import React, { useEffect } from 'react'
import { FaLocationArrow } from "react-icons/fa";
import ITServicesSlider from './ITServicesSlider';
import CTASection from './CTASection';
import Testimonial from './Testimonial';
import Article from './Article';
import WorkWith from './WorkWith';
import WhyChooseUs from './WhyChooseUs';
import Stats from './Stats';

const HomePage = () => {

    return (
        <>
            {/* ----------- HERO SECTION -----------  */}
            <section className='bg-[#ebecf5]'>
                <div className="max-w-6xl px-4 sm:px-6 pt-24 pb-20 lg:py-7 mx-auto">
                    <div className="items-center lg:flex lg:min-h-screen">
                        <div className="w-full pt-3 sm:pt-0 lg:w-1/2">
                            <div className="lg:max-w-xl">
                                <h3 className="text-sm uppercase font-semibold text-blue-600 lg:text-md">We are leading technology solutions providing</h3>
                                <h2 className="mt-3 baloo w-[100%]  xl:w-[90%] text-4xl font-semibold capitalize text-black lg:text-5xl xl:text-6xl">We Make The Best IT Solutions</h2>
                                <h2 className="mt-1.5 text-sm sm:text-md font-normal text-black md:w-[80%] lg:w-[100%]">We are leading technology solutions providing company all over the world doing over 40 years. Lorem ipsum dolor sit, amet consectetur adipisicing eli</h2>

                                <div className="hero_section_buttons flex items-start xs:items-center flex-col sm:flex-row gap-10 mt-6 mb-10 sm:mb-0 lg:mt-10">

                                    <button className="max-w-40 flex items-center gap-2 px-5 py-3 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        Get Started <FaLocationArrow />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="user_select flex items-center justify-center w-full mt-16 lg:mt-10 lg:w-1/2">
                            <img className="w-full h-full object-contain" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Layer_4.png?v=1711140172" alt="Catalogue-pana.svg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ----------- HERO SECTION -----------  */}
            <section className='bg-blue-700 flex justify-center items-center'>
                <h2 className='baloo text-white text-center text-md md:text-xl xl:text-3xl py-3 tracking-wider lg:tracking-widest'>Our Consilation Service Offers The Fastest Way FSFS</h2>
            </section>

            {/* ----------- ABOUT SECTION -----------  */}
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-4 sm:px-6 py-10 lg:py-24 md:flex-row flex-col">

                    <div className="flex justify-center lg:justify-end items-center lg:max-w-lg lg:w-full md:w-1/2 w-full mb-6 md:mb-0">
                        <img
                            alt="hero"
                            className="object-contain h-[100%] w-[100%] xl:h-[90%] xl:w-[90%]"
                            src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_252.png?v=1711046868"
                        />
                    </div>

                    <div className="lg:flex-grow md:w-1/2 lg:pl-10 md:pl-3 flex flex-col md:items-start md:text-left">
                        <div className="lg:max-w-xl pt-10">
                            <h3 className="text-md uppercase font-semibold text-blue-600 lg:text-md">About Us</h3>
                            <h2 className="baloo my-2.5 text-2xl font-semibold capitalize text-black lg:text-4xl">We Are Increasing Business Succcess With Technology</h2>
                            <h2 className="text-sm font-normal text-black">We are leading technology solutions providing company all over the world doing over 40 years. Lorem ipsum dolor sit, amet consectetur adipisicing eli</h2>


                            <div className="mission_bar grid grid-cols-1 gap-6 lg:grid-cols-1 xl:grid-cols-2 lg:gap-8 my-7 lg:my-5">

                                <div className="sec_1 flex items-center gap-4">
                                    <div className="icon bg-blue-600 p-4 rounded-full">
                                        <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/icon-park-solid_circular-connection.png?v=1711047761" alt="" />
                                    </div>
                                    <div className="data">
                                        <h3 className='baloo text-xl text-black font-semibold'>Problem Solving</h3>
                                        <h3 className='text-sm'>It is a long establish fact that a reader will be lorem ipsum</h3>
                                    </div>
                                </div>

                                <div className="sec_1 flex items-center gap-4">
                                    <div className="icon bg-blue-600 p-4 rounded-full">
                                        <img className='h-full w-full' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/octicon_goal-16.png?v=1711047761" alt="" />
                                    </div>
                                    <div className="data">
                                        <h3 className='baloo text-xl text-black font-semibold'>Mission & Vision</h3>
                                        <h3 className='text-sm'>It is a long establish fact that a reader will be lorem ipsum</h3>
                                    </div>
                                </div>
                            </div>

                            <div className="hero_section_buttons flex items-start xs:items-center flex-col-reverse sm:flex-row gap-5 lg:gap-10 mt-10">
                                <button className="max-w-40 flex items-center gap-2 px-5 py-3 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Get Started <FaLocationArrow />
                                </button>

                                <div className="person_profile flex justify-start items-center gap-2">
                                    <div className="img">
                                        <img className="object-cover w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100" alt="" />
                                    </div>
                                    <div className="person_details">
                                        <h3 className='baloo text-md text-black font-normal'>Michel Poul</h3>
                                        <p className='text-xs'>Ceo Founder</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----------- IT SERVICES -----------  */}
            <ITServicesSlider />

            {/* ----------- COMPANY STATS -----------  */}
            <Stats />

            {/* ----------- CTA SECTION -----------  */}
            <CTASection />

            {/* ----------- TESTIMONIAL -----------  */}
            <Testimonial />

            {/* ----------- ARTICLE -----------  */}
            <Article />

            {/* ----------- ARTICLE -----------  */}
            <WhyChooseUs />

            {/* ----------- WORK WITH -----------  */}
            <WorkWith />
        </>
    )
}

export default HomePage
