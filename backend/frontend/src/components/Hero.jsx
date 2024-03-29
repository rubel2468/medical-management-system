import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>Our service are  best of the world</h1> 
          <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptate fugiat illum tenetur officiis, suscipit aperiam omnis temporibus! Qui, provident!
          </p>
        </div>
        <div className="banner rounded-[60%] ">
          <img src="./profile.jpeg" alt="hero" className="animated-image" />
          {/* <span>
            <img src="/Vector.png" alt="vector" />
          </span> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
