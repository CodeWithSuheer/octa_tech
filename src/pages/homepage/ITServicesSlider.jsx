import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product from './SliderData';
import { TiMediaPlayReverse } from "react-icons/ti";
import { TiMediaPlay } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";


const ITServicesSlider = () => {
    const [slidesToShow, setSlidesToShow] = useState(3);
    const sliderRef = useRef(null);

    const next = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const previous = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const settings = {
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // useEffect(() => {
    //     const handleResize = () => {
    //         if (window.innerWidth >= 1200) {
    //             setSlidesToShow(3); // Full Desktop view
    //         } else if (window.innerWidth >= 1024) {
    //             setSlidesToShow(3); // Desktop view
    //         } else if (window.innerWidth >= 768) {
    //             setSlidesToShow(2); // Tablet view
    //         } else {
    //             setSlidesToShow(1); // Mobile view
    //         }
    //     };
    //     handleResize();
    //     window.addEventListener("resize", handleResize);
    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     };
    // }, []);

    return (
        <>
            <section className='py-10 '>
                <div className="max-w-5xl mx-auto">

                    <div className="flex justify-between items-center px-5 sm:px-0 flex-col sm:flex-row gap-7 sm:gap-5">

                        <div className="slider_text">
                            <h3 className="text-md uppercase font-semibold text-blue-600 lg:text-md">IT Services</h3>
                            <h2 className="baloo my-2 lg:my-2.5 text-2xl font-semibold w-[100%] xl:w-[60%] capitalize text-black lg:text-4xl">We Solve IT Problems With Technology</h2>
                            <h2 className="text-sm font-normal text-black w-[100%] md:w-[70%] xl:w-[70%]">We are leading technology solutions providing company all over the world doing over 40 years.</h2>
                        </div>
                        <div className="slider_button flex flex-row">
                            <button onClick={previous} className="mx-1.5 inline-block rounded-full border bg-blue-600 text-white p-2.5 focus:outline-none">
                                <TiMediaPlayReverse size={19} />
                            </button>

                            <button onClick={next} className="mx-1.5 inline-block rounded-full border bg-blue-600 text-white p-2.5 focus:outline-none">
                                <TiMediaPlay size={19} />
                            </button>
                        </div>
                    </div>


                    <div className="mt-4 text-center mx-3 px-3 sm:px-0">
                        <Slider ref={sliderRef} {...settings}>
                            {product.map((data, index) => (
                                <div key={index} className="box">
                                    <div className="box_shadow text-start cursor-pointer h-[19rem] my-5 mx-2 sm:mx-5 px-5 py-7 max-w-full sm:max-w-[18.8rem] text-gray-900 overflow-hidden rounded-lg transition focus:outline-none">
                                        <div className="img_sec relative mb-5">
                                            <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Vector_1.png?v=1711052670" alt="helo" />
                                        </div>
                                        <h2 className="baloo text-2xl">{data.service}</h2>
                                        <p>{data.desc}</p>
                                        <button className="mt-3 flex justify-start items-center text-lg font-semibold">
                                            <span>Read More</span>
                                            <img className="pt-1 h-7" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Frame_2114_1.png?v=1711053281" alt="" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ITServicesSlider
