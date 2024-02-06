import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Bars/About'
import Home from './Home'
import Contact from './Bars/Contact'
import Privacy from './Bars/Privacy'
import Shipping from './Bars/Shipping '
import Terms from './Bars/Terms'
import Allcollections from './Bars/Allcollections'
import Cardview from './Bars/Cardview'
import Wishlist from './Bars/Wishlist'
import Faqs from './Bars/Faqs'
import Login from './Bars/Login'
import Register from './Bars/Register'
import Allproducts from './Bars/Allproducts'
import Prodetails from './Bars/Prodetails'

function Section() {
  return (
    <>
      <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>}/>
             <Route path="/contact" element={<Contact/>}/>
             <Route path="/privacy" element={<Privacy/>}/>
             <Route path="/shipping" element={<Shipping/>}/>
             <Route path="/terms" element={<Terms/>}/>
             <Route path="/collect" element={<Allcollections/>}/>
             <Route path="/cartview" element={<Cardview/>}/>
             <Route path="/wishlist" element={<Wishlist/>}/>
             <Route path="/faqs" element={<Faqs/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/register" element={<Register/>}/>
             <Route path="/all-products" element={<Allproducts/>}/>
             <Route path="/product-details" element={<Prodetails/>}/>

        </Routes>
    </>
  )
}

export default Section