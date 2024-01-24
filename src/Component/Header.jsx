import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <div className="header">
            <div className="mainheader">
                    <div className="navbar nav1">
                        <div className="container">
                            <div className="bars">
                                <Link to="/">Home</Link>
                                <a href="" className='bar'>Product Accessories <i class="fa-solid fa-chevron-down"></i></a>
                                <a href="" className='bar'>Pages <i class="fa-solid fa-chevron-down"></i></a>
                            </div>
                            <div className="logo"><h1>MR.Kumar</h1></div>
                            <div className="cart">
                            <a href=""><i class="fa-solid fa-user-tie"></i></a>
                            <Link to="/wishlist"><i class="fa-solid fa-hand-holding-heart"></i></Link>
                            <Link to="/cartview"><i class="fa-brands fa-opencart"></i></Link>
                            </div>
                        </div>
                    </div>
            </div>
           
            <div className="navbar nav2">
                <div className="container">
                    <div className="offer"><a href="">New Accessories -30 % Off. More</a></div>
                    <div className="search">
                        <i class="fa-solid fa-magnifying-glass"></i> 
                        <input type="search" placeholder='Search Products...' name="" id="scerch" />
                    </div>
                    <div className="collection"><a href="">New Collections</a></div>
                </div>
            </div>
       </div>
    </>
  )
}

export default Header