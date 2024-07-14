import React from 'react'
import "./Offer.css"
import exclusive from "../Assets/shopaholic-woman-with-colorful-bags-white_79295-19903.png"

export const Offer = () => {
  return (
    <div className="offers">
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <button>Check now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive} className='img'/>
        </div>
    </div>
  )
}
