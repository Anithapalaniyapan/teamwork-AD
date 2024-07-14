import React from "react";
import './NewCollections.css';
import Newcollection from '../Assets/NewCollections';
import Item from "../Item/Item";
const NewCollections=()=>{
    return(
        <div className="new-collections">
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className="collections">
            {Newcollection.map((item,i)=>{
                return <Item key={i} name={item.name} img={item.img} old_price={item.old_price} new_price={item.new_price}/>
            })}
        </div>
        
        </div>
    )
}
export default NewCollections