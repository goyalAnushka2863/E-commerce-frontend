import React, {useEffect} from 'react'
import Image from '../../assets/images/main-pic.png'
const Skincare = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
}, []); 
  return (
    <div className='bg-gray-100 mx-36 my-16 rounded-3xl flex p-8'>
        <div className="flex flex-col pt-32 ml-10 gap-5">
            <span className='heading'>- Skincare Products</span>
            <span className='text-[40px] font-semibold'>We Offer the Best Products for your Skin</span>
            <button className='bg-[#00CD97] box-border w-1/2 rounded-full text-white text-xl font-bold py-4 px-8 '>Shop Now</button>
        </div>
      <img src={Image} alt=""/>
    </div>
  )
}

export default Skincare
