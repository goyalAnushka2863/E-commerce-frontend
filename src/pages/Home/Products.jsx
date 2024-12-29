import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../utils/AxiosInstance'
const Products = () => {
    // const [isHover, setIsHover] = useState([])
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
        const handleProductAddition = async ()=>{
            try {
                const response = await axiosInstance('/get-products')
                if(response.data && response.data.products){
                    setProducts(response.data.products)
                    setHoverStates(response.data.products.map(() => false));

                }
            } catch (error) {
            }
        }
        handleProductAddition()
    }, []); 
    const navigate = useNavigate()
    const [hoverStates, setHoverStates] = useState(
        products.map(() => false) // Initialize hover states
    );

    const handleMouseEnter = (index) => {
        setHoverStates((prev) => prev.map((hover, i) => (i === index ? true : hover)));
    };

    const handleMouseLeave = (index) => {
        setHoverStates((prev) => prev.map((hover, i) => (i === index ? false : hover)));
    };
    return (
        <div className='mx-36 flex flex-col mt-32'>
            <span className="heading">- Our Products</span>
            <span className="text-[40px] font-semibold">Explore out Products</span>
            <div className="grid grid-cols-4 grid-rows-2 ">
                {products.map((product, index) => (
                    <div className="flex flex-col gap-5 relative mt-16" key={index} onMouseOver={() => { handleMouseEnter(index) }} onMouseLeave={() => { handleMouseLeave(index) }} onClick={()=>{navigate('/product', {
                        state: {product}
                    })}}>
                        
                        <img src={product.image} alt="" className='cursor-pointer bg-gray-100 rounded-[32px]' width='85%' />
                        {product.isOff && <div className="bg-[#fe0808] text-white font-bold w-28 h-10 rounded-3xl flex items-center justify-center absolute top-6 left-44">20% OFF</div>}
                        {product.isNew && <div className="bg-[#01D099] text-white font-bold w-28 h-10 rounded-3xl flex items-center justify-center absolute top-6 left-44">NEW IN</div>}
                        <button className={`bg-[#01D099] flex items-center justify-center w-36 py-2 px-5 text-white font-semibold rounded-3xl absolute top-28 left-16 transition-all duration-300 ease-out ${hoverStates[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} onClick={()=>{navigate('/cart')}}>
                            Add to Cart
                        </button>
                        <span className='cursor-pointer text-2xl font-medium'>{product.label}</span>
                        <div className="flex items-center gap-8">
                            <span className={`py-2 px-4 font-bold rounded-full`} style={{ color: product.color, backgroundColor: product.fill }}>{product.tag}</span>
                            <div className="flex gap-2 items-center">
                                <span className='line-through text-gray-300 font-medium'>${product.price}</span>
                                <span className='text-xl font-medium'>${product.discountedPrice}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-center bg-[#00CC96] mx-auto my-16 py-5 px-10 text-white font-semibold text-xl rounded-full cursor-pointer">View All</div>
        </div>
    )
}

export default Products
