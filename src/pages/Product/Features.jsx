import React, {useEffect} from 'react'
import { IoShieldOutline } from 'react-icons/io5'
import { AiOutlineStock } from 'react-icons/ai';
import { FiDroplet } from 'react-icons/fi';

const Features = () => {
    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
    }, []); 
    return (
        <div className='flex mx-36 mt-40 gap-40'>
            <div className="flex flex-col">
                <span className="heading">- Product Features</span>
                <span className="text-[40px] font-semibold">Explore the Features</span>
            </div>
            <div className="grid grid-rows-3 gap-10 mt-5">
                <div className="flex justify-center gap-10">
                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                        <FiDroplet size={35} />
                    </div>
                    <div className="flex flex-col gap-5">
                        <span className='text-2xl font-medium'>Natural</span>
                        <p className="text-xl font-light leading-relaxed max-w-md mx-auto">
                            We are using natural ingredients only when creating our products.
                        </p>

                    </div>
                </div>
                <div className="flex justify-center gap-10">
                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                        <IoShieldOutline size={35} />
                    </div>
                    <div className="flex flex-col gap-5">
                        <span className='text-2xl font-medium'>Full Protection</span>
                        <p className="text-xl font-light leading-relaxed max-w-md mx-auto">
                            This product provides broad spectrum SPF 50 and blue light protection.
                        </p>

                    </div>
                </div>
                <div className="flex justify-center gap-10">
                    <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                        <AiOutlineStock size={35} />
                    </div>
                    <div className="flex flex-col gap-5">
                        <span className='text-2xl font-medium'>Trending</span>
                        <p className="text-xl font-light leading-relaxed max-w-md mx-auto">
                            It is one of our most popular products that we have on offer.
                        </p>

                    </div>
                </div>



            </div>
        </div>
    )
}

export default Features
