import React from 'react'
import { Link } from 'react-router-dom'

function Wishlist() {
  return (
    <>
        <div className="wishlist">
            <div className="container">
                <div className="Backbtn">
                        <Link to="/">
                        <div className="back">
                            <i class="fa-solid fa-circle-chevron-left"></i>
                            <span>Back to Home</span>
                        </div>
                        </Link>

                        <h1>Wishlist</h1>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos
                        minima exercitationem enim dignissimos odio unde mollitia
                        molestias deserunt nulla alias, eum saepe adipisci perferendis
                        sequi aliquid, quod qui animi?
                        </p>
                    </div>
            </div>
        </div>
        <div className="list">
            <div className="container">
                <h1>Wishlist</h1>
                <div className="table">
                            <table>
                                <tr>
                                    <th>Product</th>
                                    <th>Details</th>
                                    <th>Cart Button</th>
                                    <th>Delete</th>       
                                </tr>
                            </table>
                        </div>
            </div>
        </div>
    </>
  )
}

export default Wishlist