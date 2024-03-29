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

    return (
        <>
            {!user ? (
                <footer className="bg-black">
                    <div className="container px-5 sm:px-10 pt-10 pb-24 mx-auto">

                        {/* DETAILS */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-y-10 lg:grid-cols-5">

                            <div className="sm:col-span-2">
                                <h1 className="max-w-lg text-3xl font-semibold tracking-wider text-white">Logo</h1>
                                <p className='mt-5 text-sm w-[100%] sm:w-[70%] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti velit provident fugiat harum cum et quisquam quo nostrum odit nobis illo ipsam, sed, accusamus libero nisi voluptate cupiditate molestias. Odis nulla</p>
                            </div>

                            <div className='mt-4 sm:mt-8'>
                                <p className="font-semibold text-white tracking-wider">
                                    Company
                                </p>
                                <div className="flex flex-col items-start mt-3 space-y-2">
                                    <a className="text-gray-200 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Home
                                    </a>
                                    <a className="text-gray-200 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Services 🚀
                                    </a>
                                    <a className="text-gray-200 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        About Us
                                    </a>
                                    <a className="text-gray-200 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Projects
                                    </a>
                                    <a className="text-gray-200 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Team
                                    </a>
                                </div>
                            </div>

                            <div className='mt-4 sm:mt-8'>
                                <p className="font-semibold text-white dark:text-white">
                                    Contact
                                </p>
                                <div className="flex flex-col items-start mt-3 space-y-2">
                                    <a className="text-gray-200 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Phone:
                                    </a>
                                    <a className="text-gray-200 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Mail:
                                    </a>
                                    <a className="text-gray-200 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Location:
                                    </a>
                                    <a className="text-gray-200 transition-colors duration-300 cursor-pointer hover:underline hover:text-blue-500">
                                        Whatsapp:
                                    </a>
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
                                    <a href='#' target='_blank'>
                                        <FaTiktok size={24} className='mr-5 cursor-pointer text-white hover:text-gray-200' />
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
