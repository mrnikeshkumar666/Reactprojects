import React from 'react'
import { Link } from 'react-router-dom'


function Section1() {
  return (
    <>
        <div className="section1">
            <div className="container">
                <div className="box1">
                    <div className="Featured">
                        <div className='label'>Featured</div> <span>New featured collection <a href="">\ Gaming. Collector</a></span>
                    </div>
                    <h1>Best <font color='#1786f5a6'>Pro</font><font color='#6E3FCE'>ducts</font> Accessories</h1>
                    <p>Gaming accessories include gear such as headsets, extra controllers, 
                        charging stations, memory devices, carrying cases and much more.</p>
                    <Link to="/all-products"><button className='bt1'>Show products</button></Link>
                    <Link to="/product-details"><button className='bt2'>Show Collections</button></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Section1