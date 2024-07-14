import React from "react";
import './RelatedProducts.css'
import Item from "../Item/Item"
import data_product from '../Assets/Data'
const RelatedProducts = () =>{
    return(
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {data_product.map((item,i)=>{
                return <Item key={i} name={item.name} img={item.img} old_price={item.old_price} new_price={item.new_price}/>
            })}</div>
        </div>
    )
}
export default RelatedProducts


