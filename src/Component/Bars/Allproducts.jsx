import React from 'react'
import Card from './Card'

function Allproducts() {
  return (
    <>
       <div className="Allproducts">
            <div className="container">
                <div className="row">
                   <div className="col-3">
                     <h3>Filters</h3>
                      <div className="box d-flex justify-content-between">
                         <h4>AVAILABILITY</h4>
                         <p>+</p>

                      </div>
                      <div className="stok">
                         <div className="box d-flex justify-content-between">
                            <p>select</p>
                            <p>reset</p>
                         </div>
                         <div className="box d-flex justify-content-between">
                            <div className="box2">
                              <input type="checkbox" name="" id="" />&nbsp;&nbsp;
                              <label htmlFor="">In stock</label>
                            </div>
                            <p>()</p>
                         </div>
                          <div className="box d-flex justify-content-between">
                            <div className="box2">
                              <input type="checkbox" name="" id="" />&nbsp;&nbsp;
                              <label htmlFor="">Out of stock</label>
                            </div>
                            <p>()</p>
                         </div>
                      </div>
                   </div>
                   <div className="col-9">
                      <h6>Home&nbsp; / All-Products</h6>
                      <div className="d-flex flex-wrap">
                           <Card/>
                           <Card/>
                           <Card/>
                           <Card/>
                           <Card/>
                           <Card/>
                           <Card/>
                           <Card/>
                           <Card/>
                      </div>
                   </div>
                </div>
            </div>
       </div>
    </>
  )
}

export default Allproducts