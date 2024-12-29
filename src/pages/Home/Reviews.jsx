import React, { useState, useEffect } from 'react';
import Review from '../../assets/images/review.jpg';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Reviews = () => {
    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
    }, []); 
    const reviews = [
        {
            name: 'Amy Smith',
            review: 'This is the best website I have ordered something from. I highly recommend.',
            image: Review,
        },
        {
            name: 'Amy Smith',
            review: 'This is the best website I have ordered something from. I highly recommend.',
            image: Review,
        },
        {
            name: 'Amy Smith',
            review: 'This is the best website I have ordered something from. I highly recommend.',
            image: Review,
        },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const translateValue = -(currentIndex * 100) / reviews.length;
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="mx-36 mt-32 bg-gray-100 px-24 rounded-[44px] justify-center items-center flex pt-32 gap-24">
            <div className="flex flex-col w-1/2">
                <span className="heading">- Our Reviews</span>
                <span className="text-[40px] font-semibold">What our Customers are Saying</span>
            </div>
            <div className="w-1/2 relative overflow-hidden pb-16">
                <div
                    className="flex transition-transform duration-500 ease-in-out items-center"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-full flex flex-col  gap-4"
                        >
                            <img
                                src={review.image}
                                className="rounded-full p-2 bg-white border-[#00CC96] border-2"
                                width={80}
                                alt={`${review.name}'s review`}
                            />
                            <h3 className="text-2xl font-medium">{review.name}</h3>
                            <p className="font-light text-xl">{review.review}</p>
                        </div>
                    ))}
                </div>
                <div className="flex gap-2 mt-4">
                                {reviews.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white border border-[#00CC96]' : 'bg-[#00CC96]'
                                            }`}
                                    ></div>
                                ))}
                            </div>
                            <div className="btns flex gap-8 mt-5">
                                <button
                                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center transition-all ease-in-out duration-100 border border-black"
                                    onClick={handlePrev}
                                >
                                    <IoIosArrowBack size={20} />
                                </button>
                                <button
                                    className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center transition-all ease-in-out duration-100 border border-black"
                                    onClick={handleNext}
                                >
                                    <IoIosArrowForward size={20} />
                                </button>
                            </div>

            </div>

        </div>
    );
};

export default Reviews;
