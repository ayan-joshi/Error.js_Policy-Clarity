
import React, { useState } from "react";



const Hero = () => {
 
  return (
    <div className="flex justify-center relative items-center flex-col lg:gap-8 gap-5 lg-pt-0  pt-6  bg-gradient-to-r from-white-900 via-white-600 to-white-400 ...">
      
      
      {/* <Logo/> */}
      <div >
      <img src="https://img.icons8.com/ios-filled/50/000000/caduceus.png" alt="caduceus"/>
      </div>
      <div className="left-52 lg:block absolute hidden -top-60 ">
   
      </div >
      <div className="flex justify-center items-center lg:gap-8 gap-[20px] flex-col z-20" >
        {/* <p className='text-primary lg:text-lg  text-sm font-medium lg:leading-7 leading-5'>Some Title Here</p> */}
        <p className="text-black text-center lg:text-6xl lg:tracking-[-2px] tracking-normal sm:text-3xl text-xl font-medium lg:w-[60%] w-2/3 lg:leading-[60px] leading-7 py-5">
          Summarization of <br />
          Health Insurance Policies
        </p>
        <p className="lg:w-3/5 w-full px-12 text-center lg:text-xl text-xs font-normal  ">
          We Summarize the policies for individuals to help them 
          prevent Scams and explain them policies .
        </p>
       

      </div>
    </div>
  );
};

export default Hero;