import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { LuHeart } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/AxiosInstance';
const ProductDetails = ({ product }) => {
    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
    }, []);
    const image = product.image
    const [currentImg, setCurrentImg] = useState(image);
    const [count, setCount] = useState(1);
    const [showZoom, setShowZoom] = useState(false);
    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setZoomPosition({ x, y });
    };
    const navigate = useNavigate()
    const handleCart = async () => {
        try {
            const response = await axiosInstance.post('/add-to-cart', {
                productId: product._id,
                quantity: count
            })
            if (response.data && response.data.message) {
                console.log(response.data.message)
                // return response.data.cart
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                console.log(error.response.data.message)
            }
        }
    }
    return (
        <>
            <div className="flex mx-36 my-16 gap-16">
                {/* <div className="flex flex-col gap-7">
                    <img
                        src={image}
                        width={150}
                        className={`bg-gray-100 rounded-3xl ${currentImg === Pic1 ? 'border-2 border-[#01D099]' : ''}`}
                        alt="Thumbnail 1"
                        onClick={() => setCurrentImg(image)}
                    />
                    <img
                        src={Pic2}
                        width={150}
                        className={`bg-gray-100 rounded-3xl ${currentImg === Pic2 ? 'border-2 border-[#01D099]' : ''}`}
                        alt="Thumbnail 2"
                        onClick={() => setCurrentImg(Pic2)}
                    />
                    <img
                        src={Pic3}
                        width={150}
                        className={`bg-gray-100 rounded-3xl ${currentImg === Pic3 ? 'border-2 border-[#01D099]' : ''}`}
                        alt="Thumbnail 3"
                        onClick={() => setCurrentImg(Pic3)}
                    />
                </div> */}
                <div
                    className="relative"
                    onMouseLeave={() => setShowZoom(false)}
                >
                    <div className="relative">
                        <img
                            src={currentImg}
                            width={400}
                            alt="Main"
                            className="bg-gray-100 rounded-[44px]"
                            onMouseMove={handleMouseMove}
                            onMouseEnter={() => setShowZoom(true)}
                        />
                        {showZoom && (
                            <div
                                className="absolute border-2 border-gray-500 w-64 h-64 pointer-events-none"
                                style={{
                                    top: `${zoomPosition.y - 128}px`,
                                    left: `${zoomPosition.x - 128}px`,
                                    transform: 'translate(0, 0)',
                                }}
                            ></div>
                        )}
                    </div>
                    <div className="absolute bottom-6 right-6 bg-white flex items-center justify-center w-12 h-12 rounded-full shadow-lg cursor-pointer">
                        <span className="text-2xl font-bold">+</span>
                    </div>
                    {showZoom && (
                        <div
                            className="absolute top-0 left-[110%] w-full h-full bg-white border shadow-lg overflow-hidden"
                            style={{
                                backgroundImage: `url(${currentImg})`,
                                backgroundSize: "200% 200%",
                                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,

                            }}
                        ></div>
                    )}
                </div>
                <div className="flex flex-col mt-16 gap-1">
                    <span className='heading'>- Selling Fast</span>
                    <span className="text-[40px] font-semibold">{product.label}</span>
                    <div className="flex items-center gap-8 mt-10">
                        <span
                            className={`py-2 px-4 font-bold rounded-full text-xl`}
                            style={{ color: '#eab308', backgroundColor: '#fef9c3' }}
                        >
                            {product.tag}
                        </span>
                        <div className="flex gap-3 items-center">
                            <span className='line-through text-xl text-gray-300 font-medium'>${product.price}</span>
                            <span className='text-3xl font-medium'>${product.discountedPrice}</span>
                        </div>
                    </div>
                    <div className="flex gap-2 mt-10">
                        <span className=' text-gray-400'>SKU:</span>
                        <span className=''>{product._id.slice(16).toUpperCase()}</span>
                    </div>
                    <div className="flex mt-10 gap-5">
                        <div className="flex gap-5 border px-5 rounded-full items-center w-40">
                            <IoIosArrowBack
                                size={25}
                                onClick={() => { count === 1 ? setCount(count) : setCount(count - 1); }}
                                className='w-[25%] cursor-pointer'
                            />
                            <span className='text-2xl font-semibold w-[50%] text-center'>{count}</span>
                            <IoIosArrowForward size={25} onClick={() => setCount(count + 1)} className='w-[25%] cursor-pointer' />
                        </div>
                        <button className={`bg-[#01D099] w-fit flex items-center justify-center text-[20px] px-5 text-white font-semibold rounded-full`} 
                        onClick={() => {
                            navigate('/cart')
                            handleCart()
                        }}
                        // onClick={handleCart}
                        >
                            Add to Cart
                        </button>
                        <div className="p-4 rounded-full border">
                            <LuHeart size={30} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;
