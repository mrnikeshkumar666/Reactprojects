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
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">IMAGE</th>
                                <th scope="col">NAME</th>
                                <th scope="col">PRICE</th>
                                <th scope="col">QUANTITY</th>
                                <th scope="col">TOTAL</th>				
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>
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