import React from 'react'
import Card from './Bars/Card'

function Section3() {
  return (
    <>

        <div className="Section3">
                <div className="container">
                    <div className="proD d-flex justify-content-between">
                        <h1>Best Likeable <br />Products</h1>
                        <p>Among all the products, the items that people <br /> value the most over all are shown below</p>
                        <button className='seepro'>Show Products</button>
                    </div>
                    <div className="products d-flex">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Section3