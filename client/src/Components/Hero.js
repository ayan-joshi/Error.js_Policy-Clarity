import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../assets/main.json"; // Adjust the path based on your project structure

const Hero = () => {
  return (
    <div className="flex justify-evenly h-[70vh] relative items-center flex-row lg:gap-8 gap-5 lg-pt-0 pt-6 bg-gradient-to-r from-white-900 via-white-600 to-white-400 ...">
      {/* <Logo/> */}
      <div className="left-52 w-60 lg:block absolute hidden -top-60 ">
        <Lottie options={{ animationData }} height={200} width={200} />
      </div>
      <div className="flex justify-center items-center w-[40vw] lg:gap-8 gap-[20px] flex-col z-20">
        <p className="text-black text-center lg:text-6xl lg:tracking-[-2px] tracking-normal sm:text-3xl text-xl font-medium lg:w-[60%] w-2/3 lg:leading-[60px] leading-7 py-5">
          Summarization of <br />
          Health Insurance Policies
        </p>
        <p className="lg:w-3/5 w-full px-12 text-center lg:text-xl text-xs font-normal  ">
          We Summarize the policies for individuals to help them prevent Scams
          and explain them policies.
        </p>
      </div>
      <div className="w-[40vw] justify-center flex">
        {/* Lottie animation instead of the image */}
        <Lottie options={{ animationData }} height={1000} width={1000} />
      </div>
    </div>
  );
};

export default Hero;
