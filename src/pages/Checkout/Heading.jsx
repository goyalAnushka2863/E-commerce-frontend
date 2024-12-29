import React,{useEffect} from 'react'

const Heading = () => {
    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
    }, []); 
  return (
    <div className='mx-36 mt-16 flex flex-col'>
      <span className='heading'>- Almost There</span>
      <span className='text-[40px] font-semibold'>Checkout</span>
    </div>
  )
}

export default Heading
