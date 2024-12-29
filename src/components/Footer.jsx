import React, { useState, useEffect } from 'react'
import logo from '../assets/images/image.png'
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { CiLight } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";
const Footer = () => {
    const [isdarkMode, setIsDarkMode] = useState(false)
    useEffect(() => {
        const html = document.documentElement;
        if (isdarkMode) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
    }, [isdarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };
    return (
        <div className='mx-36 my-24 grid grid-cols-4 font-light gap-32'>
            <div className="flex flex-col gap-5">
                <img src={logo} alt="" width={105} className='cursor-pointer' />
                <span >&copy; 2020 - All rights reserved</span>
                <div className="flex items-center gap-5">
                    <FaInstagram size={40} className='cursor-pointer p-2  rounded-full bg-gray-100' />
                    <FiTwitter size={40} className='cursor-pointer p-2  rounded-full bg-gray-100' />
                    <FiFacebook size={40} className='cursor-pointer p-2  rounded-full bg-gray-100' />
                </div>
                <div className={`flex w-16 h-8 items-center p-1 rounded-full cursor-pointer ${isdarkMode ? 'bg-gray-800' : 'bg-gray-200'
                    }`} onClick={toggleDarkMode}
                >
                    <div
                        className={`flex items-center justify-center w-1/2 h-full rounded-full transition-all ${isdarkMode ? 'translate-x-full bg-[#00CC96]' : 'bg-[#00CC96]'
                            }`}
                    >
                        {isdarkMode ? (
                            <IoMoonOutline size={20} className="text-white" />
                        ) : (
                            <CiLight size={25} className="text-white" />
                        )}
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-5">
                <span className='text-2xl font-semibold'>Categories</span>
                <span className=''>On Sale</span>
                <span className=''>Featured</span>
                <span className=''>Masks</span>
                <span className=''>Eye Care</span>
                <span className=''>Moisturizers</span>
                <span className=''>Treatments</span>
                <span className=''>Night Care</span>
                <span className=''>Sun Care</span>
            </div>
            <div className="flex flex-col gap-5">
                <span className='text-2xl font-semibold'>Legal</span>
                <span>Terms of Service</span>
                <span>Privacy Policy</span>
                <span>Returns Policy</span>
                <span>Shipping</span>
                <span>Data Protection</span>
            </div>
            <div className="flex flex-col gap-5">
                <span className='text-2xl font-semibold'>Company</span>
                <span>About</span>
                <span>Faq</span>
                <span>Contact</span>
                <span>Careers</span>
                <span>Vision</span>
                <span>Culture</span>
            </div>
        </div>
    )
}

export default Footer
