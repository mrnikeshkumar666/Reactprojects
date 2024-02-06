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
                <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Details</th>
                            <th scope="col">Cart Button</th>
                            <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    </>
  )
}

export default Wishlist