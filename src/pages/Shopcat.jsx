import React, { useContext } from 'react'
import './CSS/Shopcat.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown-icon.png'
import Item from '../Components/Item/Item'

const Shopcat = (props) => {
  const {all_product}=useContext(ShopContext);
  return (
    <div className='shop-category'>
      <div className='color'>
        <h1>FLAT 50% OFF</h1>
        <h4> <span>12</span> Hours <span>20</span> Mins</h4>
        <div className="shocategory-loadmore">
        Explore more
      </div>
      <img className="shopcategory-banner"src={props.banner} alt="" />
      </div>
      <div className="ShopCategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 Products
        </p>
        <div className="shopcategory-sort">
          <img src={dropdown_icon} alt="" style={{ width: '25px' }}  />
        </div>
      </div>
      <div className="collections" >
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} name={item.name} img={item.img} old_price={item.old_price} new_price={item.new_price}/>
          }
          else{
            return null;
          }
        })}
      </div>
      {/* <div className="shocategory-loadmore">
        Explore more
      </div> */}
    </div>
  )
}
export default Shopcat                               