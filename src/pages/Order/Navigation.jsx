import React, {useEffect} from 'react'

const Navigation = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
}, []); 
  return (
    <>
        <div className='flex items-center mx-36 mt-16 text-xl gap-5'>
                <span>Home Page</span>
                <span>&gt;</span>
                <span>Orders</span>
            </div>
    </>
  )
}

export default Navigation
