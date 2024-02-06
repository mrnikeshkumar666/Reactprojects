import React from 'react'
import { Link } from 'react-router-dom'
import Section4 from '../Section4'
import Section3 from '../Section3'

function Prodetails() {
  return (
    <>
        <div className="Prodetails">
        <div className="container">
                    <Link to="/">
                      <div className="back">
                        <i class="fa-solid fa-circle-chevron-left"></i>
                        <span>Back to Home</span>
                      </div>
                    </Link>
                <div className="row">
                    <div className="col">
                       <div className="boxd">
                        <div className="brandwhish d-flex">
                            <div className="brand"><span>Apple</span></div>
                            <div className="wish"><i class="fa-regular fa-heart"></i><span>Add to wishlist</span></div>
                        </div>
                        <div className="revew">
                        <a href="">
                          <span className='star'>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                              <i class="fa-regular fa-star"></i>
                          </span> 
                          <span className='rite'><i class="fa-solid fa-pen-fancy"></i> <span>Write a Review</span></span>
                        </a>
                        </div>
                        <div className="proname">
                            <h3>VR Headset with Headphones</h3>
                            <p className='d-flex justify-content-between'>
                                <tp><span>TYPE:</span> <span>Laptop</span></tp>
                                <tp><span>SKU:</span> <span>1140560231148</span></tp>
                            </p>
                            <span>40MM HD optical resin lens with Focal and IPD adjustments with FOV up to 110 provides best VR Experience.Best-in-class headphones With 3.5mm Jack and removable front panel for ventilation gives best vr experience with the VR Headset</span>
                        </div>
                        <div className="size">
                            <lable>Size:</lable><br />
                            <select name="" id="">
                                  <option value="">13.5 inc</option>
                                  <option value="">15 inc</option>
                                  <option value="">14 inc</option>
                            </select>
                        </div>
                        <div className="priceqt d-flex gap-4">
                            <div className="price"><h4>125000 <sup>NPR</sup></h4><span>135000 <sup>NPR</sup></span></div>
                            <div className="quantiti">
                                <h6>Quantity :</h6>
                                <div className="box">
                                <span>-</span>
                                <span>+</span>
                                </div>
                            </div>
                        </div>
                        <button>Add to Cart</button>
                    </div>
                    </div>
                    <div className="col">
                        <div className="row imgrow">
                            <div className="col">
                                <div className="img">
                                   <div className="pic"><img src="https://gaming-workdo.myshopify.com/cdn/shop/products/6215622cv14d-removebg-preview_600x600.png?v=1671448018" alt="" /></div> 
                                   <div className="pic"><img src="https://gaming-workdo.myshopify.com/cdn/shop/products/1_50862e3f-4e56-4d7c-9220-04cde28aca6d_600x600.png?v=1671448019" alt="" /></div> 
                                   <div className="pic"><img src="https://gaming-workdo.myshopify.com/cdn/shop/products/6215622cv11d-removebg-preview_600x600.png?v=1671448018" alt="" /></div> 
                                   <div className="pic"><img src="https://gaming-workdo.myshopify.com/cdn/shop/products/6500788cv11d-removebg-preview_600x600.png?v=1671448017" alt="" /></div> 
                                   <div className="pic"><img src="https://gaming-workdo.myshopify.com/cdn/shop/products/6215622_rd-removebg-preview_600x600.png?v=1671448017" alt="" /></div> 
                                </div>
                            </div>
                            <div className="col">
                                <div className="propic">
                                    <img src="https://gaming-workdo.myshopify.com/cdn/shop/products/6215622_rd-removebg-preview_600x600.png?v=1671448017" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                
            </div>
        </div>


        <div className="deaitals">
            <div className="container">
            <span>Product details of apple laptop</span>
            <div className="row">
                <div className="col">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <span>40MM HD optical resin lens with Focal and IPD adjustments with FOV up to 110 provides best VR Experience.Best-in-class headphones With 3.5mm Jack and removable front panel for ventilation gives best vr experience with the VR Headset</span>

                <div className="reviews">
                    <h4>Customer Reviews</h4>
                    <div className="write d-flex">
                    <div className="stars">
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                        <h6>Be the first to write a review</h6>
                    </div>
                    <div className="review"><a href="">Write a reviews</a></div>  
                    </div>
                </div>
            </div>
        </div>
        <Section4/>
        <Section3/>
    </>
  )
}

export default Prodetails