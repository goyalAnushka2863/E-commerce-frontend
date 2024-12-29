import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Navigation from './Navigation';
import Header from '../../components/Header';
import Heading from './Heading';
import Footer from '../../components/Footer';
import NewsLetterSignUp from '../../components/NewsLetterSignUp';
import Queries from './Queries';
import Form from './Form';
const Contact = () => {
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
        <Header isOpen={isOpen} setIsOpen={setIsOpen} current={'Contact'}/>
        {!isOpen && <Navigation/>}
        {!isOpen && <Heading/>}
        {!isOpen && <Queries/>}
        {!isOpen && <Form/>}
        {!isOpen && <NewsLetterSignUp/>}
        {!isOpen && <Footer/>}
    </>
  )
}

export default Contact
