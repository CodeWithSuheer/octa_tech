import React from 'react'

const WorkWith = () => {
    return (
        <>
            <section className="py-14 px-5 sm:px-5">
                <div className="max-w-6xl mx-auto">
                    {/* HEADER */}
                    <div className="header text-center">
                        <h2 className="mt-1.5 baloo text-2xl font-semibold capitalize text-black lg:text-4xl">
                            Companies <span className='text-blue-600'>We Are Work</span> With
                        </h2>
                    </div>

                    {/* BODY */}
                    <div className="companies_logo max-w-3xl mx-auto mt-6">
                        <div className="grid gap-4 place-items-center grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 lg:gap-8 mt-5">
                            <div className="logos w-24 sm:w-32 flex justify-center">
                                <img className='my-4 w-full rounded-2xl object-fill' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/WhatsApp_Image_2024-04-09_at_3.00.20_PM.jpg?v=1712657823" alt="" />
                            </div>
                            <div className="logos w-24 sm:w-32 flex justify-center">
                                <img className='my-4 w-full rounded-2xl object-fill' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/WhatsApp_Image_2024-04-09_at_2.59.19_PM.jpg?v=1712657823" alt="" />
                            </div>
                            <div className="logos w-24 sm:w-32 flex justify-center">
                                <img className='my-4 w-full rounded-2xl object-fill' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/WhatsApp_Image_2024-04-09_at_2.55.12_PM.jpg?v=1712657822" alt="" />
                            </div>
                            <div className="logos w-24 sm:w-32 flex justify-center">
                                <img className='my-4 w-full rounded-2xl object-fill' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/WhatsApp_Image_2024-04-09_at_2.53.27_PM.jpg?v=1712657825" alt="" />
                            </div>
                        </div>

                        <div className="flex justify-center items-center flex-col gap-0 md:gap-10 sm:flex-row mb-10">
                            <div className="logos w-24 sm:w-32 flex justify-center">
                                <img className='my-5 w-full rounded-2xl object-fill' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/WhatsApp_Image_2024-04-09_at_2.53.45_PM.jpg?v=1712657821" alt="" />
                            </div>
                            <div className="logos w-24 sm:w-32 flex justify-center">
                                <img className='my-5 w-full rounded-2xl object-fill' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/WhatsApp_Image_2024-04-09_at_3.00.12_PM.jpg?v=1712657822" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkWith
