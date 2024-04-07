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
                            <div className="logos w-28 sm:w-36 flex justify-center">
                                <img className='my-4' src="https://res.cloudinary.com/dezi0bct4/image/upload/v1712523977/FinalImages/image_31_qukghc.png" alt="" />
                            </div>
                            <div className="logos w-28 sm:w-36 flex justify-center">
                                <img className='my-4' src="https://res.cloudinary.com/dezi0bct4/image/upload/v1712523987/FinalImages/image_36_atu5kv.png" alt="" />
                            </div>
                            <div className="logos w-28 sm:w-36 flex justify-center">
                                <img className='my-4' src="https://res.cloudinary.com/dezi0bct4/image/upload/v1712523980/FinalImages/image_33_hqzzsy.png" alt="" />
                            </div>
                            <div className="logos w-28 sm:w-36 flex justify-center">
                                <img className='my-4' src="https://res.cloudinary.com/dezi0bct4/image/upload/v1712523979/FinalImages/image_32_lmyfpu.png" alt="" />
                            </div>
                        </div>

                        <div className="flex justify-center items-center flex-col gap-0 md:gap-10 sm:flex-row mb-10">
                            <div className="logos w-28 sm:w-36 flex justify-center">
                                <img className='my-5' src="https://res.cloudinary.com/dezi0bct4/image/upload/v1712523985/FinalImages/image_35_srxx0h.png" alt="" />
                            </div>
                            <div className="logos w-28 sm:w-36 flex justify-center">
                                <img className='my-5' src="https://res.cloudinary.com/dezi0bct4/image/upload/v1712523983/FinalImages/image_34_mtfult.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WorkWith
