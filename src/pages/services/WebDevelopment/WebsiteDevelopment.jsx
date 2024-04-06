import React from 'react'
import Stats from '../../homepage/Stats';
import { FaLocationArrow } from "react-icons/fa";
import Testimonial from '../../homepage/Testimonial';

const WebsiteDevelopment = () => {

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
                                <h2 className="mt-3 w-[100%]  xl:w-[100%] text-4xl font-semibold capitalize text-black lg:text-5xl xl:text-5xl">Website Development</h2>
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
            <section className='my-10 sm:my-20'>
                <div className="px-5 sm:px-10 lg:px-0">
                    <h2 className='baloo mb-3 text-black font-semibold text-4xl sm:text-4xl xl:text-5xl text-start sm:text-center'>Our Website Developers Expertise</h2>
                    <p className='mb-5 text-black w-[100%] sm:w-[90%] md:w-[80%] xl:w-[70%] mx-auto font-medium text-sm sm:text-md lg:text-md xl:text-lg text-start sm:text-center'>
                        Our full-fledged MERN Stack developers offer business-driven IT solutions to accelerate your business growth and gains. Utilizing top trends (MongoDB,‌ ‌Express.js,‌ ‌React,‌ ‌and‌ ‌Node.js‌) of MERN Stack development, our programmers develop a versatile, safe, performance-oriented interactive web solutions, whether‌ ‌you‌ are looking for some ‌ERP,‌ ‌CMS‌ ‌development‌ ‌or‌ ‌want‌ ‌a‌ ‌custom‌ ‌web‌ ‌app‌ developed ‌using‌ ‌MERN‌ ‌Stack,‌ ‌our‌ engineers ‌can‌ ‌do‌ it ‌for‌ ‌you as per your business needs and requirements.
                    </p>


                    <div className="mt-20 max-w-7xl mx-auto flex justify-center items-center gap-8 flex-wrap">

                        {/* CARD 1 */}
                        <div className="my-3 relative min-h-[16rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
                            <div className='absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto'>
                                <img className='mid_img h-16 w-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864" alt="" />
                            </div>
                            <h2 className='mt-3 text-2xl font-semibold'>Dedicated Team</h2>
                            <p className='mt-2 text-sm sm:text-md'>Hire devoted MERN Stack developers who master in building versatile and interactive web applications by leveraging the power of MERN Stack.
                            </p>
                        </div>

                        {/* CARD 2 */}
                        <div className="my-3 relative min-h-[16rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
                            <div className='absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto'>
                                <img className='mid_img h-16 w-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864" alt="" />
                            </div>
                            <h2 className='mt-3 text-2xl font-semibold'>CMS Development</h2>
                            <p className='mt-2 text-sm sm:text-md'>Our top-notch developers build interactive, user-friendly, accessible and interesting CMS for all sorts of businesses such as micro or macro enterprises.
                            </p>
                        </div>

                        {/* CARD 3 */}
                        <div className="my-3 relative min-h-[16rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
                            <div className='absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto'>
                                <img className='mid_img h-16 w-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864" alt="" />
                            </div>
                            <h2 className='mt-3 text-2xl font-semibold'>Enterprise Solutions</h2>
                            <p className='mt-2 text-sm sm:text-md'>
                                Our Mern Stack experts bring the best enterprise solutions depending upon your business needs. Cost-effective, adaptable, upward compatible and time effective MERN solutions.
                            </p>
                        </div>

                        {/* CARD 4 */}
                        <div className="my-3 relative min-h-[16rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
                            <div className='absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto'>
                                <img className='mid_img h-16 w-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864" alt="" />
                            </div>
                            <h2 className='mt-3 text-2xl font-semibold'>Integration</h2>
                            <p className='mt-2 text-sm sm:text-md'>Migration and integration made easy, our experienced MERN stack developers have years of experience and insight on MERN stack based platforms.
                            </p>
                        </div>

                        {/* CARD 5 */}
                        <div className="my-3 relative min-h-[16rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
                            <div className='absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto'>
                                <img className='mid_img h-16 w-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864" alt="" />
                            </div>
                            <h2 className='mt-3 text-2xl font-semibold'>eCommerce Development</h2>
                            <p className='mt-2 text-sm sm:text-md'>Our developers can make your ideas become reality. With current trends of MERN eCommerce technologies, we build apps according to your business necessities.

                            </p>
                        </div>

                        {/* CARD 6 */}
                        <div className="my-3 relative min-h-[16rem] text-center px-5 py-7 bg-white shadow-xl border-2 border-gray-100 hover:border-blue-600 w-[100%] md:w-[70%] lg:w-[40%] xl:w-[35%] rounded-xl">
                            <div className='absolute -top-8 flex justify-center items-center h-16 w-16 inset-0 mx-auto'>
                                <img className='mid_img h-16 w-16' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Group_2235.png?v=1711394864" alt="" />
                            </div>
                            <h2 className='mt-3 text-2xl font-semibold'>Migration</h2>
                            <p className='mt-2 text-sm sm:text-md'>MERN is an adaptable and feasible option for all your business needs, our experts master in incorporating and migrating successfully.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* ----------- WHY CHOOSE US -----------  */}
            <section className='my-10 sm:my-16'>
                <div className="px-5 sm:px-10 lg:px-0">
                    <h2 className='baloo mb-3 text-black font-semibold text-3xl sm:text-4xl xl:text-5xl text-start sm:text-center'>Why Choose MERN Stack For Building Web Apps?</h2>
                    <p className='mb-5 text-black w-[100%] sm:w-[90%] md:w-[80%] xl:w-[70%] mx-auto font-medium text-sm sm:text-md lg:text-md xl:text-lg text-start sm:text-center'>
                        MERN is a blend of top programming languages named MongoDB, Express, React and Node that are utilized to foster premium web applications. It is an incredible innovation Stack to work with and furnish organizations with various advantages. Following are some MERN stack advantages
                    </p>

                    <div className="max-w-4xl mx-auto mt-14 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                        {/* CONTENT */}
                        <div className="px-4 xl:px-10">
                            <p className='py-1 text-lg font-medium flex items-center'><FaLocationArrow className='mr-3 mt-1 text-blue-700' size={14} /> More Adaptable</p>
                            <p className='py-1 text-lg font-medium flex items-center'><FaLocationArrow className='mr-3 mt-1 text-blue-700' size={14} /> Exceptionally Versatile</p>
                            <p className='py-1 text-lg font-medium flex items-center'><FaLocationArrow className='mr-3 mt-1 text-blue-700' size={14} /> Smooth Work Process</p>
                            <p className='py-1 text-lg font-medium flex items-center'><FaLocationArrow className='mr-3 mt-1 text-blue-700' size={14} /> Competent</p>
                            <p className='py-1 text-lg font-medium flex items-center'><FaLocationArrow className='mr-3 mt-1 text-blue-700' size={14} /> Broad set-up of tools</p>
                            <p className='py-1 text-lg font-medium flex items-center'><FaLocationArrow className='mr-3 mt-1 text-blue-700' size={14} /> Open Source</p>
                            <p className='py-1 text-lg font-medium flex items-center'><FaLocationArrow className='mr-3 mt-1 text-blue-700' size={14} /> Great Community</p>
                            <p className='py-1 text-lg font-medium flex items-center'><FaLocationArrow className='mr-3 mt-1 text-blue-700' size={14} /> Intuituve Web Application</p>
                            <p className='py-1 text-lg font-medium flex items-center'><FaLocationArrow className='mr-3 mt-1 text-blue-700' size={14} /> Solid Execution</p>
                            <p className='py-1 text-lg font-medium flex items-center'><FaLocationArrow className='mr-3 mt-1 text-blue-700' size={14} /> Self-sufficient</p>
                        </div>

                        {/* IMAGE  */}
                        <div className="h-full w-full rounded-lg">
                            <img src="https://s3-alpha-sig.figma.com/img/07ab/b0b8/04c3c64e412f0675e86e0290c565c61d?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NK7KOEAOwjPVEMMKqMcV8F-GEJ-AKdMpwgjLy9OHAJK3vqvlEIsXZ6dOiNgVo2LNxUVOWoTkI779cxWByWy2uGIjIbFmsSDHcGdo6y6VUPReV~Srg2WblN9VDOdkTGInjaAdd1zAmx5X8UDk~ewunVHtXPbhE6PE3~p202dlMsrm5JHhwzIs9EvaPl8LGWXqKvNOb46n-7Q8GQyThRPblA0kHL0jcUfbeVIqvu3x6Fo0v06hMi-ALDkKMgztYgsH9u7SdQZjeHh6lENt8TzpNIyKa8A0rMieWF6yqCNPvwWXzYMuKl7m7l~ZzO3TebdwVo~xD4Rt-1KcJXdKNdc6oA__" alt="" />
                        </div>
                    </div>

                </div>
            </section>

            {/* ----------- SECTION -----------  */}
            <section className="max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
                    <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <svg
                                    className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-400"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="13.5"
                                        cy="6.5"
                                        r=".5"
                                    />
                                    <circle
                                        cx="17.5"
                                        cy="10.5"
                                        r=".5"
                                    />
                                    <circle
                                        cx="8.5"
                                        cy="7.5"
                                        r=".5"
                                    />
                                    <circle
                                        cx="6.5"
                                        cy="12.5"
                                        r=".5"
                                    />
                                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                                </svg>
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                                    Build your portfolio
                                </h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            The simplest way to keep your portfolio always up-to-date.
                        </p>
                    </div>
                    <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <svg
                                    className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-400"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M2 3h20" />
                                    <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                                    <path d="m7 21 5-5 5 5" />
                                </svg>
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                                    Get freelance work
                                </h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            New design projects delivered to your inbox each morning.
                        </p>
                    </div>
                    <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <svg
                                    className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-400"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                                    <path d="M2 7h20" />
                                    <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
                                </svg>
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                                    Sell your goods
                                </h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Get your goods in front of millions of potential customers with ease.
                        </p>
                    </div>
                    <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <svg
                                    className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-400"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
                                    <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
                                    <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
                                    <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
                                </svg>
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                                    Get freelance work
                                </h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            New design projects delivered to your inbox each morning.
                        </p>
                    </div>
                    <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <svg
                                    className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-400"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" />
                                    <path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
                                    <path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" />
                                </svg>
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                                    Sell your goods
                                </h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Get your goods in front of millions of potential customers with ease.
                        </p>
                    </div>
                    <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
                        <div className="flex items-center gap-x-4 mb-3">
                            <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
                                <svg
                                    className="flex-shrink-0 size-6 text-blue-600 dark:text-blue-400"
                                    fill="none"
                                    height="24"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z" />
                                    <rect
                                        height="7"
                                        rx="1"
                                        width="7"
                                        x="3"
                                        y="14"
                                    />
                                    <circle
                                        cx="17.5"
                                        cy="17.5"
                                        r="3.5"
                                    />
                                </svg>
                            </div>
                            <div className="flex-shrink-0">
                                <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">
                                    Build your portfolio
                                </h3>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            The simplest way to keep your portfolio always up-to-date.
                        </p>
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

export default WebsiteDevelopment;