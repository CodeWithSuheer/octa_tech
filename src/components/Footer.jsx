import React from 'react'
import { useSelector } from 'react-redux';
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from 'react-router-dom';


const Footer = () => {
    const { user } = useSelector((state) => state.auth);

    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <>
            {!user ? (
                <footer className="bg-black">
                    <div className="container px-5 sm:px-10 pt-10 pb-24 mx-auto">

                        {/* DETAILS */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-y-10 lg:grid-cols-6">

                            <div className="sm:col-span-2">
                                <h1 className="max-w-lg text-3xl font-semibold tracking-wider text-gray-200">Octa Tech</h1>
                                <p className='mt-5 text-sm w-[100%] sm:w-[70%] text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti velit provident fugiat harum cum et quisquam quo nostrum odit nobis illo ipsam, sed, accusamus libero nisi voluptate cupiditate molestias. Odis nulla</p>
                            </div>

                            <div className='mt-4 sm:mt-8 sm:col-span-2'>
                                <p className="font-semibold text-white dark:text-white">
                                    Contact
                                </p>
                                <div className="flex flex-col items-start mt-3 space-y-2">
                                    <a className="text-gray-200 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Phone: +1 (281) 607-5120
                                    </a>
                                    <a className="text-gray-200 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Mail: info@octatechsolution.com
                                    </a>
                                    <a className="text-gray-200 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Location: 405 Elaine Valley Dr Katy TX 77493
                                    </a>
                                    <a className="text-gray-200 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Whatsapp:
                                    </a>
                                </div>
                            </div>

                            <div className='mt-4 sm:mt-8'>
                                <p className="font-semibold text-white tracking-wider">
                                    Company
                                </p>
                                <div className="flex flex-col items-start mt-3 space-y-2">
                                    <Link to="/" onClick={handleScroll} className="text-gray-200 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Home
                                    </Link>
                                    <Link to="/services" onClick={handleScroll} className="text-gray-200 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Services 🚀
                                    </Link>
                                    <Link to="/about" onClick={handleScroll} className="text-gray-200 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        About Us
                                    </Link>
                                    <Link to="/industries" onClick={handleScroll} className="text-gray-200 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Industries
                                    </Link>
                                    <Link to="/blog" onClick={handleScroll} className="text-gray-200 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Blog
                                    </Link>
                                </div>
                            </div>

                            <div className='mt-4 sm:mt-4'>
                                <div className="flex flex-wrap flex-row lg:flex-col gap-2 sm:gap-5 mx-auto mt-6">
                                    <a href='#' target='_blank'>
                                        <FaTwitter size={24} className='mr-5 cursor-pointer text-white hover:text-gray-200' />
                                    </a>
                                    <a href='#' target='_blank'>
                                        <BsInstagram size={24} className='mr-5 cursor-pointer text-white hover:text-gray-200' />
                                    </a>
                                    <a href='#' target='_blank'>
                                        <FaLinkedin size={24} className='mr-5 cursor-pointer text-white hover:text-gray-200' />
                                    </a>
                                    <a href='https://www.youtube.com/@octatechsolution' target='_blank'>
                                        <IoLogoYoutube size={24} className='mr-5 cursor-pointer text-white hover:text-gray-200' />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </footer>
            ) : null}
        </>
    )
}

export default Footer
