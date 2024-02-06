import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
        <div className="Login">
            <div className="container ">
            <div className="form">
                        <div className="back text-center">
                            <i class="fa-solid fa-circle-chevron-left"></i>
                            <span> Back to Shop</span>
                            <h2>Log In</h2>
                        </div>
                        
                        <div className="login">
                             <div className="box1">
                                 <h5>Log In</h5>
                              </div>
                            <div className="massege">
                                <h6>I am a returning customer</h6>
                                <div className="Yemail d-flex gap-4">
                                    <div className="box">
                                        <label htmlFor="">E-mail <sup>*</sup></label>
                                        <br />
                                        <input type="email" placeholder='email122@gmail.com' required /> 
                                    </div>
                                    <div className="box">
                                        <label htmlFor="">Password <sup>*</sup></label>
                                        <br />
                                        <input type="password" placeholder='Enter your pasword' required /> 
                                    </div>
                                </div>
                            </div>

                            <div className="box3 text-end">
                                <a href="">Forgot Password?</a>
                                <button>Log-in <i class="fa-solid fa-arrow-right-long"></i></button>
                            </div>
                            <div className="box4 text-center">
                                <span>If you dont have account</span>
                                <Link to="/register"><button>Register <i class="fa-solid fa-arrow-right-long"></i></button></Link>
                            </div>
                        </div>
                    </div>
            </div>
        </div>


       
    </>
  )
}

export default Login