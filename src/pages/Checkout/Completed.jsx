import React, {useEffect} from 'react'

const Completed = ({type}) => {
    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
    }, []); 
  return (
    <div className='flex mx-36 mt-16 items-center gap-1'>
        <span className={`w-12 flex items-center justify-center h-12 border rounded-full bg-[#00CC96] text-white font-bold`}>1</span>
        <span className={`w-32 h-1 bg-[#00CC96] border`}></span>
        <span className={`w-12 flex items-center justify-center h-12 border rounded-full ${type == 'shippingDetails' || type == 'billingDetails' || type == 'paymentDetails' ?'bg-[#00CC96] text-white':'text-black'}  font-bold`}>2</span>
        <span className={`w-32 h-1 ${type == 'shippingDetails' || type == 'billingDetails' || type == 'paymentDetails'?'bg-[#00CC96]':''} border`}></span>
        <span className={`w-12 flex items-center justify-center h-12 border rounded-full ${type == 'billingDetails' || type == 'paymentDetails' ?'bg-[#00CC96] text-white':'text-black'}  font-bold`}>3</span>
        <span className={`w-32 h-1 ${type == 'billingDetails' || type == 'paymentDetails'?'bg-[#00CC96]':''} border`}></span>
        <span className={`w-12 flex items-center justify-center h-12 border rounded-full ${type == 'paymentDetails'?'bg-[#00CC96] text-white':'text-black'}  font-bold`}>4</span>
    </div>
  )
}

export default Completed
