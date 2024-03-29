import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Header.css'

const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const dropdownRef = useRef(null);


    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropDownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    // TOGGLE MENU
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // CLOSE MENU WHEN LINK IS CLICKED
    const handleLinkClick = () => {
        setIsOpen(false);
        window.scroll(0, 0);
    };

    return (
        <>
            <nav className={`bg-white py-4 transition-all fixed top-0 left-0 right-0 z-60`}>
                <div className="container px-6 mx-auto">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="flex items-center justify-between">
                            {/* -------------- BRAND LOGO -------------- */}
                            <Link onClick={handleLinkClick} to="/" className='flex items-center gap-2'>
                                {/* <img className="w-auto h-6 sm:h-7" src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/profile-pic_6.png?v=1710185888" alt="" /> */}
                                <h2 className='text-2xl font-semibold tracking-wide'>Octa Tech</h2>
                            </Link>

                            {/* -------------- HAMBURGER BUTTON FOR MOBILE VIEW -------------- */}
                            <div className="flex lg:hidden">
                                <button onClick={toggleMenu} type="button" className="text-gray-500  hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                                    {isOpen ?
                                        (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></svg>
                                        )}
                                </button>
                            </div>
                        </div>

                        {/* -------------- MENU FOR LARGE VIEW -------------- */}
                        <div className="hidden lg:flex lg:items-center" ref={dropdownRef}>
                            <Link to="/services" onClick={() => window.scroll(0, 0)} className="button_navbar poppin px-0 pt-2 pb-0.5 mx-6 text-md font-medium tracking-wide text-gray-700 rounded-xl">Services</Link>
                            <Link to="/services" onClick={() => window.scroll(0, 0)} className="button_navbar poppin px-0 pt-2 pb-0.5 mx-6 text-md font-medium tracking-wide text-gray-700 rounded-xl">Industries</Link>
                            <Link to="/blog" onClick={() => window.scroll(0, 0)} className="button_navbar poppin px-0 pt-2 pb-0.5 mx-6 text-md font-medium tracking-wide text-gray-700 rounded-xl">Blog</Link>
                            <Link to="/about" onClick={() => window.scroll(0, 0)} className="button_navbar poppin px-0 pt-2 pb-0.5 mx-6 text-md font-medium tracking-wide text-gray-700 rounded-xl">About Us</Link>
                            <Link to="/contact" onClick={() => window.scroll(0, 0)} className="button_navbar poppin px-0 pt-2 pb-0.5 mx-6 text-md font-medium tracking-wide text-gray-700 rounded-xl">Contact Us</Link>

                            {/* <span className='hidden w-px h-8 bg-gray-300 md:block'></span>

                            {user ? (
                                <button onClick={handleLogout} className="button_navbar poppin px-0 pt-2 pb-0.5 mx-6 text-md font-medium tracking-wide text-gray-700 rounded-xl">Logout</button>
                            ) : (
                                <Link to="/login" onClick={() => window.scroll(0, 0)} className="button_navbar poppin px-0 pt-2 pb-0.5 mx-6 text-md font-medium tracking-wide text-gray-700 rounded-xl">Login</Link>
                            )} */}
                        </div>
                    </div>

                    {/* -------------- MENU FOR MOBILE VIEW -------------- */}
                    <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} absolute inset-x-0 w-full mt-2 px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}>
                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            <Link onClick={handleLinkClick} to="/services" className="poppin px-0 py-3 mx-6 text-md font-medium tracking-wide text-gray-700 rounded-xl">Home</Link>
                            <Link onClick={handleLinkClick} to="/services" className="poppin px-0 py-3 mx-6 text-md font-medium tracking-wide text-gray-700 rounded-xl">Services</Link>
                            <Link onClick={handleLinkClick} to="/services" className="poppin px-0 py-3 mx-6 text-md font-medium tracking-wide text-gray-700 rounded-xl">Projects</Link>
                            <Link onClick={handleLinkClick} to="/about" className="poppin px-0 py-3 mx-6 text-md font-medium tracking-wide text-gray-700 rounded-xl">About Us</Link>
                            <Link onClick={handleLinkClick} to="/contact" className="poppin px-0 py-3 mx-6 text-md font-medium tracking-wide text-gray-700 rounded-xl">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Header
