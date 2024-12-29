import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Navigation from './Navigation';
import Header from '../../components/Header';
import Heading from './Heading';
import Footer from '../../components/Footer';
import Body from './Body';
const FAQ = () => {
    useEffect(() => {
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
        {!isOpen && <Body/>}
        {!isOpen && <Footer/>}
    </>
  )
}

export default FAQ
