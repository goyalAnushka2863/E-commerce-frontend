import React, {useEffect} from 'react'
import { BsPerson } from "react-icons/bs";
import { HiOutlineCube } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa6";
const WhyUs = () => {
    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
    }, []); 
    return (
        <div className='flex flex-col mx-36 mt-16'>
            <span className="heading mx-auto">- Why Us</span>
            <span className="text-[40px] font-semibold mx-auto">Why People Choose Us</span>
            <div className="grid grid-cols-3 my-20 mx-10 gap-32">
                <div className="flex flex-col justify-center items-center gap-5">
                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center transition-all ease-in-out duration-100">
                        <HiOutlineCube size={35} />
                    </div>
                    <span className='text-2xl font-medium'>Easy Returns</span>
                    <p className="text-center text-xl font-light leading-relaxed max-w-md mx-auto">
                        Our return policy is simple and that is why customers love our shop.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-5">
                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center transition-all ease-in-out duration-100">
                        <BsPerson size={35} strokeWidth={0.2} className='cursor-pointer' />
                    </div>
                    <span className='text-2xl font-medium'>Customer Service</span>
                    <p className="text-center text-xl font-light leading-relaxed max-w-md mx-auto">We offer amazing customer service no matter what happens.</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center transition-all ease-in-out duration-100">
                        <FaRegStar size={35} />
                    </div>
                    <span className='text-2xl font-medium'>High Quality</span>
                    <p className="text-center text-xl font-light leading-relaxed max-w-md mx-auto">All of our products go through very strict inspection before we dispatch them.</p>
                </div>


            </div>
        </div>
    )
}

export default WhyUs
