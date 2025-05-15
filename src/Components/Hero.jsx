import React from 'react';

const Hero = () => {
    return (
<div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(/images/more/3.png)",
  }}
>
  <div className="hero-overlay"></div>
  <div></div>
  <div className="hero-content text-neutral-content ">
    <div className="w-5/6 ml-150 mt-50">
      <h1 className="mb-5 text-5xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
      <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
      <button className="btn  ml-13 text-white  border mt-20 mb-2  border-[#331A15]
               bg-[#D2B48C] ">Learn More</button>
    </div>
  </div>
</div>
    );
};

export default Hero;