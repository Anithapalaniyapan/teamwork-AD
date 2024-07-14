import React from 'react';
import "./Hero.css"
import Hiiimg from "../Assets/istockphoto-1303509809-612x612.jpg";
import shopgirl from "../Assets/young-beautiful-girl-bright-dress-holding-different-shopping-bags-isolated-white-background_224078-4184.jpg";

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS</h2>
      <div>
      <div className='hero-hand-icon'>
        <p>New</p>
        <img src={Hiiimg} style={{ width: '100px' }} />
      </div>
      <p>Collections</p>
      <p>for everyone</p>
      </div>
      <div className="hero-latest-btn">
        <div>Latest Collections</div>
        {/* <img src={Hiiimg}style={{ width: '30px' }}  /> */}
      </div>
</div>
      <div className="hero-right"> 
        <img src={shopgirl}style={{ width: '400px',height:'600px' }} />
       </div>
    </div>
    
  );
}

export default Hero;
