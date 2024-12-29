import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Navigation from './Navigation';
import Header from '../../components/Header';
import Heading from './Heading';
import Footer from '../../components/Footer';
import NewsLetterSignUp from '../../components/NewsLetterSignUp';
import Questions from './Questions';
const FAQ = () => {
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
        {!isOpen && <Questions/>}
        {!isOpen && <NewsLetterSignUp/>}
        {!isOpen && <Footer/>}
    </>
  )
}

export default FAQ
