import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Navigation from './Navigation'
import NewsLetterSignUp from '../../components/NewsLetterSignUp'
import Footer from '../../components/Footer'
import ProductDetails from './ProductDetails'
import Features from './Features'
import Reviews from '../Home/Reviews'
import Explore from './Explore'
const Product = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const { product } = location.state || {}; 
  console.log(product)
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {

    return () => {
    }
  }, [isOpen])
  return (
    <>
      <Navbar />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} current={'Product'} />
      {!isOpen && <Navigation product={product}/>}
      {!isOpen && <ProductDetails product={product}/>}
      {!isOpen && <Features />}
      {!isOpen && <Reviews />}
      {!isOpen && <Explore />}
      {!isOpen && <NewsLetterSignUp />}
      {!isOpen && <Footer />}
    </>
  )
}

export default Product
