import React from 'react'

const CTASection = () => {
    return (
        <>
            <section className='flex justify-center items-center px-5 sm:px-10 bg-white py-16 sm:py-24'>
                <div className="max-w-5xl mx-auto">
                    <div className="relative box_shadow bg-white py-6 sm:py-10 px-5 sm:px-6 rounded-xl grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">

                        <div className="rounded-lg bg-white pl-0 sm:pl-4">
                            <h2 className="baloo my-2.5 text-2xl font-semibold capitalize text-black lg:text-4xl">Stay Connected With <br /> Cutting Edge IT</h2>
                            <h2 className="my-3 text-sm font-normal text-black">Explore your career options with FutureBot, the AI-powered chatbot that brings you tailor-made course recommendations. Get started and make your next career move.</h2>
                            <button className="mt-3 flex justify-start items-center text-lg font-semibold">
                                <span>Read More</span>
                                <img className="pt-1 h-7" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Frame_2114_1.png?v=1711053281" alt="" />
                            </button>
                        </div>


                        <div className="hidden lg:flex">
                            <img className='absolute z-40 right-10 -top-[8.2rem] w-[20rem]' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/r61-_Converted_-_Recovered_1.png?v=1711055294" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CTASection
