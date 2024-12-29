import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const handleLogout = ()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <div className='flex bg-[#171719] text-white py-4 justify-around box-border sticky top-0 z-10'>
      <span className='font-bold text-xl flex items-center justify-center cursor-pointer'>EpiGlow</span>
      <nav className="">
        <ul className='flex gap-8 text-[12px] items-center justify-center h-full font-medium text-[#8494A0]'>
            <li className="nav-li" onClick={()=>(navigate('/'))}>Home</li>
            <li className="nav-li" onClick={()=>(navigate('/category'))}>Category</li>
            <li className="nav-li" onClick={()=>{navigate('/cart')}}>Shopping Cart</li>
            <li className="nav-li"onClick={()=>{navigate('/checkout')}}>Checkout</li>
            <li className="nav-li" onClick={()=>{navigate('/orders')}}>Your Orders</li>
            <li className="nav-li"onClick={()=>{navigate('/signup')}} >Sign Up</li>
            <li className="nav-li" onClick={()=>{navigate('/login')}}>Login</li>
            <li className="nav-li" onClick={()=>{navigate('/FAQ')}}>FAQ</li>
            <li className="nav-li" onClick={()=>{navigate('/contact')}}>Contact</li>
            <li className="nav-li" onClick={()=>{navigate('/about')}}>About</li>
        </ul>
      </nav>
      <div className="btns flex gap-5">
        <div className="btn bg-green-600 py-3 px-6 font-medium text-[12px] rounded-full hover:relative hover:-top-[2px] flex items-center justify-center transition-all duration-2000">
          <button>Buy</button>
        </div>
        <div onClick={handleLogout} className="btn bg-red-600 py-3 px-6 font-medium text-[12px] rounded-full hover:relative hover:-top-[2px] flex items-center justify-center transition-all duration-2000">
          <button>Logout</button>
        </div>

      </div>
    </div>
  )
}

export default Navbar
