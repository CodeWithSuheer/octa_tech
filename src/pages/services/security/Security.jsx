import React from 'react'
import Stats from '../../homepage/Stats';
import { FaLocationArrow } from "react-icons/fa";
import Testimonial from '../../homepage/Testimonial';

const Security = () => {

    return (
        <>
            <section className='relative pt-3 lg:pt-20 lg:pb-12 bg-gray-50'>
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

                <div className="max-w-6xl px-4 z-50 sm:px-6 pt-16 pb-2 lg:pt-0 lg:pb-0 mx-auto">
                    <div className="items-center lg:flex lg:min-h-[60vh]">
                        <div className="w-full pt-3 sm:pt-0 lg:w-1/2">
                            <div className="lg:max-w-xl">
                                <h2 className="mt-3 w-[100%]  xl:w-[90%] text-4xl font-semibold capitalize text-black lg:text-5xl xl:text-5xl">Security Management</h2>
                                <h2 className="mt-4 text-md font-normal text-black md:w-[80%] lg:w-[96%]">
                                    Whether customers connect via voice or email, chat or social channels or even forging connections in immersive environments in the metaverse ensure your CX
                                </h2>

                                <div className="hero_section_buttons flex items-start xs:items-center flex-col sm:flex-row gap-10 mt-6 mb-10 sm:mb-0 lg:mt-7">
                                    <button className="max-w-40 flex items-center gap-2 px-5 py-3 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                        Let's Talk <FaLocationArrow />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="user_select flex items-center justify-center px-0 sm:px-10 xl:px-0 w-full mt-16 lg:mt-10 lg:w-1/2">
                            <img className="w-full h-full rounded-xl object-contain" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Rectangle_1037_9.png?v=1711653491" alt="Catalogue-pana.svg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ----------- BOLD TEXT -----------  */}
            <section className='bg-blue-700 flex justify-center items-center'>
                <h2 className='baloo text-white text-center text-md md:text-xl xl:text-3xl py-3 tracking-wider lg:tracking-widest'>It is a long established fact that a reader will be distracte</h2>
            </section>

            {/* ----------- DETAILS -----------  */}
            <section className='my-16'>
                <div className="px-5 sm:px-10 lg:px-0">
                    <h2 className='baloo mb-3 text-black w-[100%] sm:w-[80%] xl:w-[80%] mx-auto font-semibold text-3xl sm:text-4xl xl:text-5xl text-center'>The branches of security management include</h2>
                    <p className='mb-5 text-black w-[100%] sm:w-[90%] md:w-[80%] xl:w-[70%] mx-auto font-medium text-sm sm:text-md lg:text-md xl:text-lg text-center'>These branches of help desk support play a crucial role in providing timely assistance, resolving user issues, and ensuring smooth operation of IT services within organizations.</p>


                    <div className="mt-20 max-w-7xl mx-auto flex justify-center items-center gap-8 flex-wrap">

                        {/* CARD 1 */}
                        <div className="my-3 relative min-h-[16rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
                            <div className='absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto'>
                                <img className='mid_img h-16 w-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864" alt="" />
                            </div>
                            <h2 className='mt-3 text-2xl font-semibold'>Information Security Management</h2>
                            <p className='mt-2 text-sm sm:text-md'> Information security management involves protecting an organization's sensitive information from unauthorized access, disclosure, disruption, modification, or destruction. It includes implementing security policies, access controls, encryption, and conducting risk assessments to safeguard data.
                            </p>
                        </div>

                        {/* CARD 2 */}
                        <div className="my-3 relative min-h-[16rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
                            <div className='absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto'>
                                <img className='mid_img h-16 w-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864" alt="" />
                            </div>
                            <h2 className='mt-3 text-2xl font-semibold'>Network Security Management</h2>
                            <p className='mt-2 text-sm sm:text-md'>Network security management focuses on securing an organization's network infrastructure from cyber threats and attacks. It includes tasks like configuring firewalls, intrusion detection systems, VPNs, and monitoring network traffic to detect and prevent unauthorized access.
                            </p>
                        </div>

                        {/* CARD 3 */}
                        <div className="my-3 relative min-h-[16rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
                            <div className='absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto'>
                                <img className='mid_img h-16 w-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864" alt="" />
                            </div>
                            <h2 className='mt-3 text-2xl font-semibold'>Endpoint Security Management</h2>
                            <p className='mt-2 text-sm sm:text-md'>Endpoint security management involves securing individual devices such as computers, laptops, smartphones, and tablets within an organization. It includes tasks like installing antivirus software, conducting regular security updates, and implementing endpoint security solutions to protect against malware and other threats.
                            </p>
                        </div>

                        {/* CARD 4 */}
                        <div className="my-3 relative min-h-[16rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
                            <div className='absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto'>
                                <img className='mid_img h-16 w-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864" alt="" />
                            </div>
                            <h2 className='mt-3 text-2xl font-semibold'>Security Compliance Management</h2>
                            <p className='mt-2 text-sm sm:text-md'>Security compliance management ensures that an organization adheres to relevant security standards, regulations, and best practices. It involves conducting security audits, risk assessments, and implementing controls to meet compliance requirements and mitigate security risks.
                            </p>
                        </div>

                        {/* CARD 5 */}
                        <div className="my-3 relative min-h-[16rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
                            <div className='absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto'>
                                <img className='mid_img h-16 w-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864" alt="" />
                            </div>
                            <h2 className='mt-3 text-2xl font-semibold'>Incident Response and Management</h2>
                            <p className='mt-2 text-sm sm:text-md'>Incident response and management focus on preparing for and responding to security incidents such as data breaches, cyber attacks, or system compromises. It includes developing incident response plans, conducting security incident investigations, and implementing measures to contain and recover from security incidents.

                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----------- COMPANY STATS -----------  */}
            <Stats />

            {/* ----------- CONTENT SECION -----------  */}
            <Testimonial />
        </>
    )
}

export default Security;
