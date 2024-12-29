import React from "react"
import Home from "./pages/Home/Home"
import Category from './pages/Category/Category'
import Product from './pages/Product/Product'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ShoppingCart from "./pages/Shopping Cart/ShoppingCart"
import Checkout from "./pages/Checkout/Checkout"
import SignUp from './pages/SignUp/SignUp'
import Login from "./pages/Login/Login"
import FAQ from "./pages/FAQ/FAQ"
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"
import Terms from "./pages/T&Cs/Terms"
import Order from "./pages/Order/Order"

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  const routes = (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category' element={<Category />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<ShoppingCart />} />
        <Route path="/checkout" element={<Navigate to="/checkout/details" replace />} />

        <Route
          path='/checkout/:type'
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route
          path='/orders'
          element={
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          }
        />

        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/terms' element={<Terms />} />
      </Routes>
    </Router>
  );

  return <>{routes}</>;
}

export default App;
