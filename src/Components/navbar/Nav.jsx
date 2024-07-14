import React, { useState } from 'react'
import img from "../Assets/logo_big.png";
import "./Nav.css";
import {Link} from "react-router-dom"


function Nav() {

    const [menu,setmenu]=useState("shop")

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={img} className="shopimg"/>
            <p>Shopper</p> 
        </div>
        <ul className="navmenu">
            <li onClick={()=>{setmenu("shop")}}> <Link  style={{textDecoration:"none"}} to='/'>Shop </Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("womens")}}><Link style={{textDecoration:"none"}} to='/womens'>Women </Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("mens")}}><Link  style={{textDecoration:"none"}}to='/mens'>Men </Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:"none"}}to='/kids'>Kids </Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="navcart">
           <Link to="/login"> <button>Login</button></Link>
           <Link to="/cart">  <img src="https://t3.ftcdn.net/jpg/05/60/17/66/360_F_560176615_cUua21qgzxDiLiiyiVGYjUnLSGnVLIi6.jpg" className='cartimg'/></Link>
            <div className="navcount">0</div>
</div>
    </div>
    
  )
}

export default Nav