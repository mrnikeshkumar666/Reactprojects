import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>

     <div className="footer">
         <div class="container">
             <div class="row">
                 <div class="col-4">
                    <div className="logo"><h1>MR.Kumar</h1></div>
                    <div className="containt">
                        <h3>Reach out & let your <span>mind</span> <e>explore</e> </h3>
                        <p>I also love the challenge of trying to beat a difficult game or master a new skill.</p>
                    </div>
                 </div>
                 <div class="col-3">
                    <div className="navigation">
                        <h6>NAVIGATION:</h6>
                        <ul>
                            <a href=""><li>Search</li></a>
                            <Link to="/collect"><li>All Collections</li></Link>
                            <Link to="/"><li>All Products</li></Link>
                            <Link to="/"><li>Article Page</li></Link>
                        </ul>
                    </div>
             </div>
                 <div class="col-3">
                    <div className="navigation">
                            <h6>ABOUT US:</h6>
                            <ul>
                                <Link to="/about"><li>About Us</li></Link>
                                <Link to="/contact"><li>Contact with us</li></Link>
                                <Link to=""><li>FAQ's</li></Link>
                                <Link to="/privacy"><li>Privacy Policy</li></Link>
                                <Link to="/shipping"><li>Shipping & Delivery</li></Link>
                                <Link to="terms"><li>Terms & Conditions</li></Link>
                            </ul>
                    </div>
                 </div>
                 <div class="col-2">
                    <div className="link">
                        <h6>SHARE:</h6> 
                        <div className="icon d-flex gap-3">
                            <div className="box"><a href=""><i class="fa-brands fa-youtube"></i></a></div>
                            <div className="box"><a href=""><i class="fa-brands fa-facebook-messenger"></i></a></div>
                            <div className="box"><a href=""><i class="fa-brands fa-instagram"></i></a></div>
                            <div className="box"><a href=""><i class="fa-brands fa-twitter"></i></a></div>
                        </div>  
                    </div>
                 </div>

          </div>
          <p>© 2024, Products WorkDo, Powered by Mr.Nikesh</p>
         </div>
     </div>
     
    </>
  )
}

export default Footer
