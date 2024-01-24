import React from 'react'

function Cardview() {
  return (
    <>
       <div className="cardview">
          <div className="container">
                <a href="">
                    <div className="shoping">
                        <i class="fa-solid fa-circle-chevron-left"></i>
                        <span>Continue shopping</span>
                    </div>
                </a>
                <h1>Your Cart</h1>
                <div className="row">
                    <div className="col-9">
                        <div className="table">
                            <table>
                                <tr>
                                    <th>IMAGE</th>
                                    <th>NAME</th>
                                    <th>PRICE</th>
                                    <th>QUANTITY</th>				
                                    <th>TOTAL</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="col-3">
                        <h5>ORDER SPECIAL INSTRUCTIONS</h5>
                        <div className="box1">
                            <textarea name="" id=""  placeholder='Order special instructions' ></textarea>
                        </div>
                        <div className="box2">
                            <h3>Subtotal</h3>
                            <h6> 25000.00<span>NPR</span></h6>
                            <p>Taxes and shipping calculated at checkout</p>
                            <button>Process to checkout</button>
                        </div>

                    </div>
                </div>
                
          </div>
       </div>
    </>
  )
}

export default Cardview