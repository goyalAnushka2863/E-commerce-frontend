import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header';
import Skincare from './Skincare';
import Categories from './Categories';
import Products from './Products';
import WhyUs from './WhyUs';
import Reviews from './Reviews';
import Blog from './Blog';
import NewsLetterSignUp from '../../components/NewsLetterSignUp';
import Footer from '../../components/Footer';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {

    return () => {
    }
  }, [isOpen])
  const [allProducts, setAllProducts] = useState([])
  const getAllProducts = async () => {
    try {
      const response = await axiosInstance.get("/get-products");
      if (response.data && response.data.products) {
        setAllProducts(response.data.products);
      }
    } catch (error) {
      console.log("An unexpected error. Try again.");
    }
  };

  const onSearchProduct = async (query)=>{
    try {
      const response = await axiosInstance.get('/search-product', {
        params:{query}
      })
      if(response.data && response.data.products){
        // setIsSearch(true)
        setAllProducts(response.data.products)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleClearSearch = ()=>{
    setIsSearch(false)
    getAllProducts()
  }
  
  return (
    <>
      <Navbar />
      <Header isOpen={isOpen} setIsOpen={setIsOpen} current={'Home'} onSearchProduct={onSearchProduct} handleClearSearch={handleClearSearch} />
      {!isOpen && (<Skincare />)}
      {!isOpen && (<Categories />)}
      {!isOpen && <Products />}
      {!isOpen && <WhyUs />}
      {!isOpen && <Reviews />}
      {!isOpen && <Blog />}
      {!isOpen && <NewsLetterSignUp />}
      {!isOpen && <Footer />}

    </>
  )
}

export default Home
