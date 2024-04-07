import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import Marquee from 'react-fast-marquee';

const data = [
    {
        review:
            "I was drowning in database issues, but Octa Tech's consultants were lifesavers! They not only optimized my system but also showed me how to extract valuable insights. Now my data is working for me.",
        name: 'Sarah M',
        role: 'Business Owner',
    },
    {
        review:
            "My dream app became a reality thanks to Octa Tech's developers. They listened to my vision and built a user-friendly app that's exceeding expectations. Highly recommend!",
        name: 'David L.',
        role: 'Entrepreneur',
    },
    {
        review:
            "Before Octa Tech, IT headaches were a constant struggle. Now, they're my trusted advisors who simplify everything and keep my business running smoothly. They're true tech troubleshooters!",
        name: 'Lisa K.',
        role: 'Marketing Director',
    },
];

const Testimonial = () => {
    return (
        <>
            <section className='py-5 px-0'>
                <div className='max-w-full mx-auto px-2 sm:px-0'>
                    {/* HEADER */}
                    <div className='header text-center'>
                        <h3 className="text-md uppercase tracking-wider font-semibold text-blue-600 lg:text-md">
                            Testimonials
                        </h3>
                        <h2 className="mt-2 baloo text-2xl font-semibold capitalize text-black lg:text-4xl">
                            Our Client's Feedback
                        </h2>
                        <h2 className="mt-1 text-sm tracking-wide font-normal text-black mx-auto w-[90%] lg:w-[40%]">
                            We are leading technology solutions providing company all over the
                            world doing over 40 years lorem ipsum dolor sit amet.
                        </h2>
                    </div>
                </div>


                {/* BODY */}
                <Marquee
                    direction='left'
                    // gradient
                    // gradientWidth={100}
                    className='testimonial_marquee mt-14'>
                    {data.map((data, i) => (
                        <article className='group mx-10' key={i}>
                            <div className='box bg-white text-sm shadow-2xl max-w-[23rem] p-6 text-gray-700 rounded-xl'>
                                {data.review}
                            </div>

                            <div className='p-4 flex justify-start items-center gap-3'>
                                <div className="img p-3 rounded-full bg-blue-200">
                                    <FaUserAlt size={20} />
                                </div>
                                <div className='profile'>
                                    <h3 className='text-lg font-medium text-gray-900'>{data.name}</h3>
                                    <p className='mt-0 line-clamp-3 text-sm/relaxed text-gray-500'>
                                        {data.role}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </Marquee>
            </section>
        </>
    );
};

export default Testimonial;
