import React from 'react'

function Register() {
  return (
    <>
       <div className="register">
            <div className="container ">
            <div className="form">
                        <div className="back text-center">
                            <i class="fa-solid fa-circle-chevron-left"></i>
                            <span> Back to Shop</span>
                            <h2>Register</h2>
                        </div>
                        
                        <div className="login">
                             <div className="box1">
                                 <h5>Your Personal Details</h5>
                              </div>
                            <div className="massege">
                                <div className="Yemail d-flex gap-4">
                                    <div className="box">
                                        <label htmlFor="">First-name <sup>*</sup></label>
                                        <br />
                                        <input type="text" placeholder='Enter your first-name' required /> 
                                    </div>
                                    <div className="box">
                                        <label htmlFor="">Last-name <sup>*</sup></label>
                                        <br />
                                        <input type="text" placeholder='Enter your last-name' required /> 
                                    </div>
                                </div>
                                <div className="box1">
                                    <label htmlFor="">E-mail <sup>*</sup></label>
                                    <br />
                                    <input type="email" placeholder='email122@gmail.com' required /> 
                                </div>
                            </div>

                            <div className="Create">
                                <h2>Your Password</h2>
                                <div className="password d-flex gap-4">
                                    <div className="box">
                                        <label htmlFor="">Password <sup>*</sup></label>
                                        <br />
                                        <input type="password" placeholder='Enter your pasword' required /> 
                                    </div>
                                    <div className="box">
                                        <label htmlFor="">Conform-Password <sup>*</sup></label>
                                        <br />
                                        <input type="password" placeholder='Enter Conform-Password' required /> 
                                    </div>
                                </div>
                            </div>

                            <div className="box3 text-end">  
                                <button>Create-Acount <i class="fa-solid fa-arrow-right-long"></i></button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

    </>
  )
}

export default Register