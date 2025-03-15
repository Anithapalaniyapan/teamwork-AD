import React from "react";
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const { product } = props || {}; // Ensure `props` exists
    return (
        <div className="breadcrum">
            HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" />
            {product?.category || "Unknown Category"} <img src={arrow_icon} alt="" /> {product?.name || "Unknown Product"}
        </div>
    );
};


export default Breadcrum