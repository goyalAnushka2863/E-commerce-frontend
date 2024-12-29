import React, { useState } from 'react'

const NewsLetterSignUp = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');
    return (
        <div className='flex flex-col justify-center items-center mx-36 py-24 bg-gray-100 rounded-[60px] gap-5'>
            <span className='heading'>- Our Newsletter</span>
            <span className='text-[40px] font-bold'>Sign Up to our Newsletter</span>
            <div className="flex justify-center items-center gap-10 w-3/4 mt-10">
                <div className="w-[50%]">
                    <input type="email" className={`py-5 px-16 w-full rounded-full outline-none ${isFocused ? 'border-2 border-[#00CC96]' : 'border-transparent'}`} onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(value !== '')} onChange={(e) => setValue(e.target.value)}
                    />
                </div>
                <button className="flex items-center justify-center bg-[#00CC96] py-5 px-10 text-white font-semibold text-xl rounded-full">Sign Up</button>
            </div>
        </div>
    )
}

export default NewsLetterSignUp
