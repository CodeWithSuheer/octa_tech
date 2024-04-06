import React from 'react'
import data from "./ServicesData";
import infrastructureData from "./InfrastructureData";
import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import './Services.css'

const Services = () => {
    const navigate = useNavigate();


    // HANDLE NAVIGATE
    const handleNavigate = (url) => {
        navigate(`/${url}`)
        window.scrollTo(0, 0)
    }


    return (
        <>
            <section className='relative pt-5 lg:pt-20 lg:pb-12 bg-gray-50'>
                {/* GRADIENT */}
                <div className="absolute inset-x-0 bottom-0 z-0 transform-gpu overflow-hidden blur-3xl">
                    <svg
                        className="h-[21.1875rem] sm:h-[42.375rem]"
                        viewBox="0 0 1155 678"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                            fillOpacity=".3"
                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                        />
                        <defs>
                            <linearGradient
                                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                                x1="1155.49"
                                x2="-78.208"
                                y1=".177"
                                y2="474.645"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#5c55d9" />
                                <stop offset={1} stopColor="#e8c8d5" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>


                <div className="max-w-6xl px-4 z-50 sm:px-6 lg:px-10 xl:px-0 pt-14 pb-10 sm:pt-20 lg:pt-0 lg:pb-0 mx-auto">
                    <div className="items-center lg:flex lg:min-h-[60vh]">

                        <div className="w-full pt-3 sm:pt-0 lg:w-1/2">
                            <div className="lg:max-w-xl">
                                <h2 className="mt-3 w-[100%] xl:w-[90%] text-4xl leading-5 font-semibold capitalize text-black lg:text-5xl xl:text-5xl">All Services</h2>
                                <h2 className="mt-4 pt-2 text-sm sm:text-[1.08rem] font-normal leading-6 text-black md:w-[80%] lg:w-[90%]">
                                    Whether customers connect via voice or email, chat or social channels or even forging connections in immersive environments in the metaverse ensure your CX
                                </h2>

                                <div className="hero_section_buttons flex items-start xs:items-center flex-col sm:flex-row gap-10 mt-6 mb-10 sm:mb-0 lg:mt-7">
                                    <button onClick={() => { Tawk_API.toggle(); }} className="max-w-40 flex items-center gap-2 px-5 py-3 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        Let's Talk <FaLocationArrow />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="user_select flex items-center justify-center w-full mt-14 lg:mt-10 lg:w-1/2">
                            <img className="w-full h-full rounded-xl object-contain" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_1144.png?v=1711652757" alt="Catalogue-pana.svg" />
                        </div>
                    </div>
                </div>

            </section>

            {/* ----------- HERO SECTION -----------  */}
            <section className='bg-blue-700 relative flex justify-center items-center'>
                <h2 className='baloo text-white text-center text-md md:text-xl xl:text-3xl py-3 tracking-wider lg:tracking-widest'>It is a long established fact that a reader will be distracte</h2>
            </section>

            {/* ----------- ALL SERVICES -----------  */}
            <section className='my-16'>
                <div className="max-w-5xl mx-auto px-5 sm:px-10 lg:px-0">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 place-items-center lg:gap-8">
                        {data.map((data, index) => (
                            <div key={index} onClick={() => handleNavigate(data.url)} className="card_up_hover group cursor-pointer overflow-hidden rounded-lg shadow transition hover:shadow-lg my-1">
                                <img
                                    alt=""
                                    src={data.img}
                                    className="h-56 w-full object-cover"
                                />

                                {/* CARD - DATA */}
                                <div className="relative bg-white group-hover:bg-blue-600 group-hover:text-white p-4 sm:px-4 sm:py-6 text-center flex justify-center items-center flex-col">
                                    <div className='absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto'>
                                        <img className='mid_img h-16 w-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864" alt="" />
                                    </div>
                                    <h2 className="mt-3 text-xl font-semibold tracking-wide">{data.service}</h2>
                                    <p className='text-sm my-1.5 w-[95%] md:w-[90%]'>{data.desc}</p>
                                    <button className="mt-1 flex justify-center items-center group-hover:underline group-hover:underline-offset-4 text-sm font-semibold">
                                        <span>Read More</span>
                                        <MdOutlineKeyboardArrowRight size={22} className='mt-1' />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section >



            <section className='my-16'>
                <div className="max-w-5xl mx-auto px-5 sm:px-10 lg:px-0">
                    <h2 className='mb-10 text-black font-semibold text-4xl text-center'>Infrastructure Management</h2>


                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 place-items-center lg:gap-8">
                        {infrastructureData.map((data, index) => (
                            <div key={index} onClick={() => handleNavigate(data.url)} className="card_up_hover group cursor-pointer overflow-hidden rounded-lg shadow transition hover:shadow-lg my-1">
                                <img
                                    alt=""
                                    src={data.img}
                                    className="h-56 w-full object-cover"
                                />

                                {/* CARD - DATA */}
                                <div className="relative bg-white group-hover:bg-blue-600 group-hover:text-white p-4 sm:px-4 sm:py-6 text-center flex justify-center items-center flex-col">
                                    <div className='absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto'>
                                        <img className='mid_img h-16 w-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864" alt="" />
                                    </div>
                                    <h2 className="mt-3 text-xl font-semibold tracking-wide">{data.service}</h2>
                                    <p className='text-sm my-1.5 w-[95%] md:w-[90%]'>{data.desc}</p>
                                    <button className="mt-1 flex justify-center items-center group-hover:underline group-hover:underline-offset-4 text-sm font-semibold">
                                        <span>Read More</span>
                                        <MdOutlineKeyboardArrowRight size={22} className='mt-1' />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>




            {/* ----------- FEATURES -----------  */}
            {/* <section className="bg-white pt-10 pb-6">
                <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
                    <div className="container mx-auto px-0 md:px-6 bg-white">

                        <div className="mb-16 text-center">
                            <h4 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h4>
                            <p className="mt-2 text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">How we change the game

                            </p>
                        </div>


                        <div className="flex flex-wrap my-12">


                            <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 px-4 py-5 sm:px-8 sm:py-8">
                                <div className="flex items-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                        fill="currentColor" className="h-6 w-6 text-indigo-500">
                                        <path
                                            d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                        </path>
                                    </svg>
                                    <div className="ml-4 text-xl">Increase sales</div>
                                </div>
                                <p className="leading-loose text-gray-500">Consectetur pariatur irure exercitation sit amet id
                                    consectetur consecteturmagna et Lorem labore qui velit.
                                </p>
                            </div>



                            <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r px-4 py-5 sm:px-8 sm:py-8">
                                <div className="flex items-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                        fill="currentColor" className="h-6 w-6 text-indigo-500">
                                        <path
                                            d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                        </path>
                                    </svg>
                                    <div className="ml-4 text-xl">Enterprise-ready</div>
                                </div>
                                <p className="leading-loose text-gray-500">Labore duis pariatur est exercitation laboris cupidatat amet
                                    cillum. Amet nisi ullamco.
                                </p>
                            </div>



                            <div className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 px-4 py-5 sm:px-8 sm:py-8">
                                <div className="flex items-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                        fill="currentColor" className="h-6 w-6 text-indigo-500">
                                        <path
                                            d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                        </path>
                                    </svg>
                                    <div className="ml-4 text-xl">Unlimited growth</div>
                                </div>
                                <p className="leading-loose text-gray-500">Elit deserunt nisi esse duis cupidatat proident sit minim
                                    mollit officia pariatur incididunt in tempor.
                                </p>
                            </div>



                            <div className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 px-4 py-5 sm:px-8 sm:py-8">
                                <div className="flex items-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                        fill="currentColor" className="h-6 w-6 text-indigo-500">
                                        <path
                                            d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                        </path>
                                    </svg>
                                    <div className="ml-4 text-xl">Recommended by experts</div>
                                </div>
                                <p className="leading-loose text-gray-500">Velit sit tempor pariatur quis pariatur incididunt culpa
                                    dolor voluptate officia incididunt velit dolore.
                                </p>
                            </div>



                            <div className="w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 px-4 py-5 sm:px-8 sm:py-8">
                                <div className="flex items-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                        fill="currentColor" className="h-6 w-6 text-indigo-500">
                                        <path
                                            d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                        </path>
                                    </svg>
                                    <div className="ml-4 text-xl">Modern platform</div>
                                </div>
                                <p className="leading-loose text-gray-500">Laboris elit consectetur sint nisi eu mollit proident sit
                                    magna velit adipisicing consequat amet reprehenderit.
                                </p>
                            </div>



                            <div className="w-full md:w-1/2 lg:w-1/3 px-4 py-5 sm:px-8 sm:py-8">
                                <div className="flex items-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="20" height="20"
                                        fill="currentColor" className="h-6 w-6 text-indigo-500">
                                        <path
                                            d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z">
                                        </path>
                                    </svg>
                                    <div className="ml-4 text-xl">Integrations</div>
                                </div>
                                <p className="leading-loose text-gray-500">Nostrud excepteur incididunt proident sit nulla ipsum sunt
                                    nostrud est esse adipisicing irure officia consectetur.
                                </p>
                            </div>



                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Services
