import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CTASection = () => {
    return (
        <>
            <section className='flex justify-center items-center px-5 sm:px-10 bg-white py-16 sm:py-24'>
                <div className="max-w-5xl mx-auto">
                    <div className="relative box_shadow bg-white py-6 sm:py-16 px-5 sm:px-6 rounded-xl grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">

                        <div className="rounded-lg bg-white pl-0 sm:pl-4">
                            <h2 className="baloo my-2.5 text-2xl font-semibold capitalize text-black lg:text-4xl">Request A Free Quote Now!</h2>
                            <h2 className="my-2 text-sm font-normal text-black">
                                Don't waste another minute wrestling with frustrating technical issues. Get your FREE quote today and experience the Octa Tech difference. We help you focus on what truly matters
                            </h2>
                            <button onClick={() => { Tawk_API.toggle(); }} className="mt-3 text-blue-600 tracking-wider hover:underline hover:underline-offset-4 flex justify-start items-center text-lg font-semibold">
                                <span>Let's Talk</span>
                                <MdOutlineKeyboardArrowRight size={22} className='mt-1.5' />
                            </button>
                        </div>


                        <div className="hidden lg:flex">
                            <img className='absolute z-40 right-10 -top-[8.2rem] w-[20rem]' src="https://res.cloudinary.com/dezi0bct4/image/upload/v1712505291/latestImages/r61-_Converted_-_Recovered_1_hldy9d.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CTASection
