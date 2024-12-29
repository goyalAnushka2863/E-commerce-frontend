import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Navigation from './Navigation';
import Header from '../../components/Header';
import Heading from './Heading';
import Form from './Form';
import Footer from '../../components/Footer';
const SignUp = () => {
    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
    }, []); 
      const [isOpen, setIsOpen] = useState(false)
        useEffect(() => {
        
        }, [isOpen])
  return (
    <>
        <Navbar/>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} current={'SignUp'}/>
        {!isOpen && <Navigation/>}
        {!isOpen && <Heading/>}
        {!isOpen && <Form/>}
        {!isOpen && <Footer/>}
    </>
  )
}

export default SignUp
