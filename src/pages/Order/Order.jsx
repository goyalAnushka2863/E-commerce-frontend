import React, {useState, useEffect} from 'react'
import Navigation from './Navigation'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Body from './Body'
const Order = () => {
    const [isOpen, setIsOpen] = useState(false)
        useEffect(() => {
        
          return () => {
          }
        }, [isOpen])
  return (
    <>  
        <Navbar/>
        <Navigation/>
        <Header isOpen={isOpen} setIsOpen={setIsOpen} current={'Orders'}/>
        {!isOpen && <Body/>}
    </>
  )
}

export default Order
