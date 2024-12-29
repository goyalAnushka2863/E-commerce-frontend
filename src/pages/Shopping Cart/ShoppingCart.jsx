import React , {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Body from './Body'
import Header from '../../components/Header'
import NewsLetterSignUp from '../../components/NewsLetterSignUp'
import Footer from '../../components/Footer'
import Navigation from './Navigation'
import { useLocation } from 'react-router-dom'
import axiosInstance from '../../utils/AxiosInstance'
const ShoppingCart = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
    // const handleCart = async()=>{
    //   try {
    //     const response = await axiosInstance('/add-to-cart', {
    //       productId : product._id,
    //       quantity : quantity
    //     })
    //     if(response.data && response.data.message){
    //       console.log(response.data.message)
    //     }
    //   } catch (error) {
    //     if(error.response  && error.response.data && error.response.data.message){
    //       console.log(error.response.data.message)
    //     }
    //   }
    // }
    // handleCart()
}, []); 
  const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
    
      return () => {
      }
    }, [isOpen])
    // const location = useLocation()
    // const {product, quantity} = location.state || {}
    // const [userID, setUserID] = useState('')
  return (
    <>
      <Navbar/>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} current={'Cart'}/>
      {!isOpen && <Navigation/>}
      {!isOpen && <Body/>}
      {!isOpen && <NewsLetterSignUp/>}
      {!isOpen && <Footer/>}
    </>
  )
}

export default ShoppingCart
