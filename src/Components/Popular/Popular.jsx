import React from 'react'
import Item from "../Item/Item"
import data_product from '../Assets/Data'
import "./Popular.css"
function Popular() {
  return (
    <div className='popular'>
        <h1>Popular in women</h1>
        <hr/>
        <div className='popular-item'>
            {data_product.map((item,i)=>{
                return<Item key={i} name={item.name} img={item.img} old_price={item.old_price} new_price={item.new_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular
