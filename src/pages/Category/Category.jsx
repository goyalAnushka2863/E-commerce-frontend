import React , {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar'
import Header from '../../components/Header'
import Navigation from './Navigation'
import SampleProducts from './SampleProducts'
import NewsLetterSignUp from '../../components/NewsLetterSignUp'
import Footer from '../../components/Footer'
const Category = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
}, []); 
  const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
    
      return () => {
      }
    }, [isOpen])
  return (
    <>
      <Navbar/>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} current={'Categories'}/>
      {!isOpen && <Navigation/>}
      {!isOpen && <SampleProducts/>}
      {!isOpen && <NewsLetterSignUp/>}
      {!isOpen && <Footer/>}
    </>
  )
}

export default Category
