import React from 'react';
import Marquee from 'react-fast-marquee';

const data = [
    {
        review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus, quisquam, quae, quod, quis, quibusdam, quia, quisquam, quisquam, quisquam',
        name: 'Recusandae',
        role: 'Dev Team',
    },
    {
        review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus, quisquam, quae, quod, quis, quibusdam, quia, quisquam, quisquam, quisquam',
        name: 'Recusandae',
        role: 'Dev Team',
    },
    {
        review:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus, quisquam, quae, quod, quis, quibusdam, quia, quisquam, quisquam, quisquam',
        name: 'Recusandae',
        role: 'Dev Team',
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
                            <div className='box bg-white shadow-2xl max-w-[23rem] p-6 text-gray-700 rounded-xl'>
                                {data.review}
                            </div>

                            <div className='p-4 flex justify-start items-center gap-3'>
                                <img
                                    className='object-cover w-10 h-10 rounded-full'
                                    src='https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&h=764&q=100'
                                    alt=''
                                />

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
