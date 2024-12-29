import React, { useState, useEffect } from 'react'
import logo from '../assets/images/image.png'
import { FiShoppingCart } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { Input } from 'postcss';                                                                                                                            
const Header = ({isOpen, setIsOpen, current, onSearchProduct, handleClearSearch}) => {
    useEffect(() => {
    
    }, [isOpen])
    const navigate = useNavigate()
    const [isSearch, setIsSearch] = useState(false)
    const [query, setQuery] = useState('')
    const handleSearch = ()=>{
        if(query){
            onSearchProduct(query)
        }
    }
    return (
        <>
            <div className="flex flex-col gap-16">
                <div className="flex justify-around items-center  mt-16">
                    <img src={logo} alt="" width={105} className='cursor-pointer'/>
                    <button
                        className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center transition-all ease-in-out duration-1000"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className="relative w-6 h-6 top-[10px] left-[0.5px]">
                            <span
                                className={`absolute block w-full h-[2px] bg-black transition-transform duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                                    }`}
                            ></span>
                            <span
                                className={`absolute block w-full h-[2px] bg-black transition-transform duration-500 ease-in-out ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                                    }`}
                            ></span>
                        </div>
                    </button>
                    <div className="btns flex justify-center items-center gap-10">
                        {isSearch && <input type='text' className='border outline-[#01D099] py-1 px-3 rounded-3xl' onChange={(e)=>{setQuery(e.target.value)}} />}
                        <IoSearch size={25} className='cursor-pointer' onClick={()=>{
                            setIsSearch(true)
                            handleSearch    
                        }} />
                        
                        <FiShoppingCart size={25} className='cursor-pointer' onClick={()=>{navigate('/cart')}}/>
                        <BsPerson size={25} strokeWidth={0.2} className='cursor-pointer' />
                    </div>
                </div>
                {isOpen && <ul className='flex flex-col justify-center items-center text-2xl font-light gap-8 relative right-5'>
                    <li className={` ${current==='Home'?'text-[#01D099] font-medium':''} transition-all ease-in duration-50 cursor-pointer`} onClick={() => { navigate('/') }}>Home</li>
                    <li className={`${current==='Categories'?'text-[#01D099] font-medium':''} transition-all ease-in duration-50 flex justify-center items-center gap-2`} onClick={() => { navigate('/category')}}>Categories  <IoIosArrowForward /></li>
                    <li className={`${current==='Blog'?'text-[#01D099] font-medium':''} transition-all ease-in duration-50 cursor-pointer`}>Blog</li>
                    <li className={`${current==='About'?'text-[#01D099] font-medium':''} transition-all ease-in duration-50 cursor-pointer`} onClick={() => { navigate('/about') }}>About</li>
                    <li className={`${current==='Contact'?'text-[#01D099] font-medium':''} transition-all ease-in duration-50 cursor-pointer`} onClick={() => { navigate('/contact') }}>Contact</li>
                </ul>}
                {isOpen && <div className="flex items-center mx-36 gap-10">
                <FaInstagram size={25} className='cursor-pointer'/>
                <FiTwitter size={25} className='cursor-pointer'/>
                <FiFacebook size={25} className='cursor-pointer'/>
                </div>}
            </div>
        </>
    )
}

export default Header
