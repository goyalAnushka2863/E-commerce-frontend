import React, {useState, useEffect}from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Navigation from './Navigation'
import Heading from './Heading'
import Completed from './Completed'
import DetailsPage from './DetailsPage'
import ShippingDetails from './ShippingDetails'
import BillingDetails from './BillingDetails'
import PaymentDetails from './PaymentDetails'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../utils/AxiosInstance'
const Checkout = () => {

  const {type} = useParams();
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
    setPaymentDetails(() => ({
      method: 'Credit Card'
  }))
  }, []); 
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    
  }, [isOpen])
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([])
    useEffect(()=>{
      const fetchCartItems = async () => {
        try {
            const response = await axiosInstance.get('/get-cart-items');
            if (response.data && response.data.products) {
                setProducts(response.data.products);
                console.log(response.data.products);
            }
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };
    fetchCartItems();
    // fetchCartItems();
  },[])
  useEffect(() => {
      setTotal(products.reduce(
          (acc, { product, quantity }) =>
              Math.round(( acc + product.discountedPrice * quantity + product.discountedPrice * 0.18*quantity) * 100) / 100,
          0
      )+ 15)
      console.log(total)
    }, [products])
    const [shippingDetails, setShippingDetails] = useState({});
    const [billingDetails, setBillingDetails] = useState({});
    const [paymentDetails, setPaymentDetails] = useState({});
    // const handleCreateOrder = async ()=>{
    //   try {
    //     const response = await axiosInstance.post('/create-order',{
    //       shippingDetails,
    //       billingDetails,
    //       paymentDetails,
    //       totalPrice: total
    //     })
    //     console.log(response)
    //   } catch (error) {
    //       // if(error.response && error.response.data && error.response.data.message){
    //       //   console.log(error.response.data.message)
    //       // }
    //       console.log(error)
    //   }
    // }
    const handleCreateOrder = async () => {
      try {
          const response = await axiosInstance.post('/create-order', {
              shippingDetails,
              billingDetails,
              paymentDetails,
              totalPrice: total, // Ensure `total` is defined and numeric
          });
          console.log('Order created successfully:', response.data);
      } catch (error) {
          // if (error.response && error.response.data && error.response.data.message) {
          //     console.error('Error creating order:', error.response.data.message);
          // } else {
          //     console.error('An error occurred:', error.message);
          // }
          console.log(error)
      }
  };
  
  return (
    <>
      <Navbar/>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} current={'Checkout'}/>
      {!isOpen && <Navigation/>}
      {!isOpen && <Heading/>}
      {!isOpen && <Completed type={type} />}
      {!isOpen && type == 'details' && <DetailsPage/>}
      {!isOpen && type == 'shippingDetails' && <ShippingDetails setShippingDetails={setShippingDetails}/>}
      {!isOpen && type == 'billingDetails' && <BillingDetails setBillingDetails={setBillingDetails}/>}
      {!isOpen && type == 'paymentDetails' && <PaymentDetails setPaymentDetails={setPaymentDetails} createOrder={handleCreateOrder}/>}
    </>
  )
}

export default Checkout
