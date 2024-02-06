import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <div className="header">
            <div className="mainheader">
                    <div className="nav1">
                        <div className="container d-flex justify-content-between">
                            <div className="bars">
                                <ul className='d-flex'>
                                    <li><Link to="/">Home</Link></li>
                                    <li><a href="" className='bar1'>Product Accessories <i class="fa-solid fa-chevron-down"></i></a></li>
                                    <li>
                                        <a href="" className='bar2'>Pages <i class="fa-solid fa-chevron-down"></i></a>
                                         <ul className='text-start'>
                                                <li><Link to="/about">About Us</Link></li>
                                                <li><Link to="/contact">Contact with us</Link></li>
                                                <li><Link to="/faqs">FAQ's</Link></li>
                                                <li><Link to="/privacy">Privacy Policy</Link></li>
                                                <li><Link to="/shipping">Shipping & Delivery</Link></li>
                                                <li><Link to="/terms">Terms & Conditions</Link></li>
                                         </ul>
                                    </li>
                                </ul>  
                            </div>
                            <div className="logo"><h1><span>MR.</span>Kumar</h1></div>
                            <div className="cart">
                                <ul className='d-flex'>
                                    <li>
                                        <a href=""><i class="fa-solid fa-user-tie"></i></a>
                                        <ul>
                                            <li><Link to="/login">Log-in</Link></li>
                                            <li><Link to="/register">Create-Account</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/wishlist"><i class="fa-solid fa-hand-holding-heart"></i></Link></li>
                                    <li><Link to="/cartview"><i class="fa-brands fa-opencart"></i></Link></li>
                                </ul>
                           
                            
                            
                            </div>
                        </div>
                        <div className="nav2">
                            <div className="container d-flex justify-content-between ">
                                <div className="offer"><a href="">New Accessories -30 % Off. <a>More</a></a></div>
                                <div className="search">
                                    <i class="fa-solid fa-magnifying-glass"></i> 
                                    <input type="search" placeholder='Search Products...' name="" id="scerch" />
                                </div>
                                <div className="collection"><a href="">New Collections</a></div>
                            </div>
                         </div>
                    </div>
                      
                    </div>     
       </div>
    </>
  )
}

export default Header