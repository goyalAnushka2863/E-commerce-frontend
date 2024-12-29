import React, { useEffect } from 'react'
import { BsPerson } from "react-icons/bs";
import { HiOutlineCube } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa6";
const OurCoreValues = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='flex flex-col mx-36 my-16'>
            <span className="heading mx-auto">- Company Values</span>
            <span className="text-[40px] font-semibold mx-auto">Our Core Values</span>
            <div className="grid grid-cols-3 my-20 mx-10 gap-32">
                <div className="flex flex-col justify-center items-center gap-5">
                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center transition-all ease-in-out duration-100">
                        <HiOutlineCube size={35} />
                    </div>
                    <span className='text-2xl font-medium'>Great Innovation</span>
                    <p className="text-center text-xl font-light leading-relaxed max-w-md mx-auto">
                        We are always focusing on making all our products as innovative as possible.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center transition-all ease-in-out duration-100">
                        <BsPerson size={35} strokeWidth={0.2} className='cursor-pointer' />
                    </div>
                    <span className='text-2xl font-medium'>High Quality</span>
                    <p className="text-center text-xl font-light leading-relaxed max-w-md mx-auto">One of our main values is the quality of the products that we sell to the customers.</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center transition-all ease-in-out duration-100">
                        <FaRegStar size={35} />
                    </div>
                    <span className='text-2xl font-medium'>Teamwork Matters</span>
                    <p className="text-center text-xl font-light leading-relaxed max-w-md mx-auto">We believe that being a successful company is all about being a team.</p>
                </div>

            </div>
                <button
                    type="submit"
                    className="flex items-center justify-center border py-3 px-8 font-semibold text-xl rounded-full bg-[#00CC96] text-white mx-auto"
                >
                    View Jobs
                </button>
        </div>
    )
}

export default OurCoreValues
