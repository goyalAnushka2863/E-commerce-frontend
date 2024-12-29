import React, { useState } from 'react'
import CompanyBg from '../../assets/images/company-bg.jpg'
import CompanyPhoto from '../../assets/images/company-photo.jpg'
const about = ([
    {
        heading: 'Natural Ingredients Only',
        content: '10 years ago, when one of the co-founders came up with the idea of making skincare and beauty products using only natural ingreadients, he did not even think twice.'
    },
    {
        heading: 'Affordable Pricing Strategy',
        content: 'One of our main goals from the start was to offer high quality products that would also have affordable prices. We just can’t believe that we have finally achieved this and now we are proud of it.'
    },
])
const Body = () => {
    return (
        <>
            <div className="flex flex-col mx-36">
                <img src={CompanyBg} alt="" className='rounded-[50px]' />
                <div className="flex mx-10 mt-32 gap-20">
                    <div className="flex flex-col w-1/2">
                        <span className='heading'>- How it has Started</span>
                        <span className='text-[40px] font-semibold'>How and When it has All Started</span>
                        <img src={CompanyPhoto} alt="" className='h-full rounded-[40px] mt-16 w-full mx-auto' />
                    </div>
                    <div className="flex flex-col w-1/2 justify-center">
                        <ul className='list-disc flex flex-col gap-10 '>
                            {about.map((item, index) => (
                                <>
                                    <li key={index} className='text-[#00CC96] font-semibold text-2xl'>{item.heading}</li>
                                    <p key={item.heading} className='font-light text-2xl leading-relaxed'>{item.content }</p>

                                </>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body
