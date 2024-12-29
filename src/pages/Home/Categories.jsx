import { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FiShoppingBag, FiEye, FiDroplet } from 'react-icons/fi';
import { AiOutlineStock } from 'react-icons/ai';
import { GoStack } from 'react-icons/go';
import { IoShieldOutline, IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

function Categories() {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
}, []); 
  const categories = [
    { icon: <FiShoppingBag color="#00CC96" size={32} />, label: 'OnSale' },
    { icon: <AiOutlineStock color="#00CC96" size={32} />, label: 'Featured' },
    { icon: <GoStack color="#00CC96" size={32} />, label: 'Masks' },
    { icon: <FiEye color="#00CC96" size={32} />, label: 'Eye Care' },
    { icon: <FiDroplet color="#00CC96" size={32} />, label: 'Moisturizers' },
    { icon: <IoShieldOutline color="#00CC96" size={32} />, label: 'Treatments' },
    { icon: <IoMoonOutline color="#00CC96" size={32} />, label: 'Night Care' },
    { icon: <IoSunnyOutline color="#00CC96" size={32} />, label: 'Sun Care' },
  ];
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + categories.length) % categories.length
    );
  };

  const visibleCategories = [...categories, ...categories]; // Duplicate for seamless loop
  const translateValue = -(currentIndex * 100) / categories.length;
  return (
    <div className="mx-36 flex flex-col mt-32">
      <span className="heading">- The Categories</span>
      <div className="flex justify-between">
        <span className="text-[40px] font-semibold">Browse by Category</span>
        <div className="btns flex gap-8">
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
          className="flex gap-7 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${translateValue}%)`,
          }}
        >
          {visibleCategories.map((category, index) => (
            <button
              key={index}
              className="flex flex-col justify-center items-center gap-2 bg-gray-100 rounded-xl p-5 min-w-[12.5%]"
              onClick={()=>{navigate('/category')}}
            >
              {category.icon}
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
