import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Pic1 from '../../assets/images/product-pic-1.png';
import Pic2 from '../../assets/images/product-pic-2.png';
import Pic3 from '../../assets/images/product-pic-3.png';
import Pic4 from '../../assets/images/product-pic-4.png';
import Pic5 from '../../assets/images/product-pic-5.png';
import Pic6 from '../../assets/images/product-pic-6.png';

const Explore = () => {
    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
    }, []); 
    const products = [
        { image: Pic1, label: 'Damaged Repair', tag: 'SUN CARE', price: '$30', discountedPrice: '$20', isOff: true, isNew: false, fill: '#fef9c3', color: '#eab308' },
        { image: Pic3, label: 'Acne Skin Gel', tag: 'TREATMENTS', price: '', discountedPrice: '$20', isOff: false, isNew: false, fill: '#FFEFF5', color: '#FF69A2' },
        { image: Pic2, label: 'Night Eye Cream', tag: 'EYE CARE', price: '$30', discountedPrice: '$20', isOff: true, isNew: false, fill: '#E9F1FF', color: '#3C82FF' },
        { image: Pic4, label: 'Dry Skin Rescue', tag: 'MOISTURIZERS', price: '', discountedPrice: '$20', isOff: false, isNew: false, fill: '#E5FAF4', color: '#04CD98' },
        { image: Pic5, label: 'Body Protection', tag: 'TREATMENTS', price: '', discountedPrice: '$20', isOff: false, isNew: true, fill: '#fef9c3', color: '#eab308' },
        { image: Pic6, label: 'All In One Gel', tag: 'FEATURED', price: '', discountedPrice: '$20', isOff: false, isNew: false, fill: '#E9F1FF', color: '#3C82FF' },
    ];
    const [hoverStates, setHoverStates] = useState(
        products.map(() => false) // Initialize hover states
    );
    const handleMouseEnter = (index) => {
        setHoverStates((prev) => prev.map((hover, i) => (i === index ? true : hover)));
    };

    const handleMouseLeave = (index) => {
        setHoverStates((prev) => prev.map((hover, i) => (i === index ? false : hover)));
    };
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 4; // Number of items visible in the slider
    const slideCount = 1; // Number of items to slide on navigation

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + slideCount) % products.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - slideCount + products.length) % products.length
        );
    };
    const visibleProducts = [...products, ...products]; // Duplicate for seamless loop

    // Calculate translate value to show 4 items
    const translateValue = -(currentIndex * 100) / visibleCount;
    const navigate = useNavigate()
    return (
        <div className='mx-36 flex flex-col my-32'>
            <span className="heading">- Explore More</span>
            <div className="btns flex gap-8 justify-between">
                <span className="text-[40px] font-semibold">Related Products</span>
                <div className="flex btns gap-10">
                    <button
                        className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center transition-all ease-in-out duration-100 hover:border hover:border-black"
                        onClick={handlePrev}
                    >
                        <IoIosArrowBack size={20} />
                    </button>
                    <button
                        className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center transition-all ease-in-out duration-100 hover:border hover:border-black"
                        onClick={handleNext}
                    >
                        <IoIosArrowForward size={20} />
                    </button>
                </div>
            </div>
            <div className="overflow-hidden mt-16">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(${translateValue}%)`,
                        width: `${(products.length * 100) / visibleCount}%`,
                    }}
                >
                    {visibleProducts.map((product, index) => (
                        <div
                            className="flex flex-col gap-5 relative mt-16 min-w-[17%]" // 25% width for 4 items per row
                            key={index}
                            onMouseOver={() => { handleMouseEnter(index) }} onMouseLeave={() => { handleMouseLeave(index) }}
                        >
                            <img
                                src={product.image}
                                alt=""
                                className="cursor-pointer bg-gray-100 rounded-[32px]"
                                width="85%"
                            />
                            {product.isOff && (
                                <div className="bg-[#fe0808] text-white font-bold w-28 h-10 rounded-3xl flex items-center justify-center absolute top-6 left-44">
                                    20% OFF
                                </div>
                            )}
                            {product.isNew && (
                                <div className="bg-[#01D099] text-white font-bold w-28 h-10 rounded-3xl flex items-center justify-center absolute top-6 left-44">
                                    NEW IN
                                </div>
                            )}
                            <button className={`bg-[#01D099] flex items-center justify-center w-36 py-2 px-5 text-white font-semibold rounded-3xl absolute top-28 left-16 transition-all duration-300 ease-out ${hoverStates[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} onClick={()=>{navigate('/cart')}}>
                                Add to Cart
                            </button>
                            <span className="cursor-pointer text-2xl font-medium">
                                {product.label}
                            </span>
                            <div className="flex items-center gap-8">
                                <span
                                    className={`py-2 px-4 font-bold rounded-full`}
                                    style={{
                                        color: product.color,
                                        backgroundColor: product.fill,
                                    }}
                                >
                                    {product.tag}
                                </span>
                                <div className="flex gap-2 items-center">
                                    <span className="line-through text-gray-300 font-medium">
                                        {product.price}
                                    </span>
                                    <span className="text-xl font-medium">
                                        {product.discountedPrice}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Explore;
