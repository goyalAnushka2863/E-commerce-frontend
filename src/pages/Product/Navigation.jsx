import React, {useEffect} from 'react'

const Navigation = ({product}) => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
}, []); 
  return (
    <>
        <div className='flex items-center mx-36 mt-16 text-xl gap-5'>
                <span>Home Page</span>
                <span>&gt;</span>
                <span>Categories</span>
                <span>&gt;</span>
                <span>{product.tag.toLowerCase()}</span>
                <span>&gt;</span>
                <span>{product.label}</span>
            </div>
    </>
  )
}

export default Navigation
