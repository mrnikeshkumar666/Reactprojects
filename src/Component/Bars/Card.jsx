import React, { useEffect, useState } from 'react'


function Card() {
    const[data , setData]=useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => setData(json))
  },[])
//  console.log(data)
  return (
    <>
     
    <div className="Card">
    
    {data.map(()=>
        <div className="cbox container">
            <div className="Pname"><h4></h4></div>
            <div className="type">TYPE: Chair</div>
            <div className="img"><img src="https://gaming-workdo.myshopify.com/cdn/shop/products/1_50862e3f-4e56-4d7c-9220-04cde28aca6d_600x600.png?v=1671448019" alt="" /></div>
            <label>Color:</label><br />
            <select name="" id="Color">
                <option value="">Black</option>
                <option value="">White</option>
            </select>
            <div className="PC">
              <div className="price">
                <org >55000.00<sup>NPR</sup></org><br/>
                <mrp >6500.00<sup>NPR</sup></mrp>
              </div>
              <button >Add to Card</button>
            </div>
        </div> 
        )}
    </div>
   
    </>
  )}

export default Card