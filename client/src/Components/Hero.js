
import React from "react";

const hero = () => {
  return (
    <div className="flex justify-center relative items-center flex-col lg:gap-8 gap-5 lg-pt-0  pt-6 ">
      
      
      {/* <Logo/> */}
      <div>
      <img src="/webp/logo.webp" alt="logo" className="lg:w-64 w-36  " />
      </div>
      <div className="left-52 lg:block absolute hidden -top-60 ">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="800"
          height="900"
          className="z-10  lg:" // Add the md:hidden class here
          viewBox="0 0 1011 907"
          fill="none"
        >
          <g filter="url(#filter0_f_560_200)">
            <path
              d="M438.302 250L250 653.5H332.178L467 366.5L503.999 291.5L550 366.5L681.5 657H760.375L569.846 250L503.999 291.5L438.302 250Z"
              fill="#6950FC"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_560_200"
              x="0"
              y="0"
              width="1010.38"
              height="907"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_560_200"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="flex justify-center items-center lg:gap-8 gap-[20px] flex-col z-20">
        {/* <p className='text-primary lg:text-lg  text-sm font-medium lg:leading-7 leading-5'>Some Title Here</p> */}
        <p className="text-black text-center lg:text-6xl lg:tracking-[-2px] tracking-normal sm:text-3xl text-xl font-medium lg:w-[60%] w-2/3 lg:leading-[60px] leading-7">
          Summarization of <br />
          Health Insurance Policies
        </p>
        <p className="lg:w-3/5 w-full px-12 text-center lg:text-xl text-xs font-normal ">
          We Summarize the policies for individuals to help them 
          prevent Scams and explain them policies .
        </p>
        <div className="flex justify-center items-center gap-[30px]">
  <button className="bg-[#a382f7] text-black lg:px-8 lg:py-3 px-4 py-2 lg:text-xl text-sm text-center rounded-lg lg:rounded-xl font-medium">
    Get Started
  </button>
  <button className="bg-transparent flex items-center gap-5 lg:px-8 lg:py-3 px-4 py-2 lg:text-xl text-sm text-black rounded-lg lg:rounded-xl border-[0.8px] border-[#ffffff]">
    Explore
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="lg:w-4 w-3"
      viewBox="0 0 17 17"
      fill="none"
    >
      <path
        d="M16.5813 7.93357C16.4497 7.8086 16.2932 7.70941 16.1207 7.64172C15.9482 7.57403 15.7632 7.53918 15.5763 7.53918C15.3894 7.53918 15.2044 7.57403 15.0319 7.64172C14.8594 7.70941 14.7029 7.8086 14.5713 7.93357L9.91429 12.3335V2.21368C9.91429 1.86006 9.76516 1.52093 9.4997 1.27089C9.23424 1.02084 8.87421 0.880371 8.49879 0.880371C8.12338 0.880371 7.76334 1.02084 7.49788 1.27089C7.23243 1.52093 7.08329 1.86006 7.08329 2.21368V12.3335L2.4263 7.93357C2.15975 7.6825 1.79824 7.54145 1.42129 7.54145C1.04434 7.54145 0.682831 7.6825 0.416287 7.93357C0.149743 8.18463 0 8.52515 0 8.88022C0 9.23528 0.149743 9.5758 0.416287 9.82686L7.49379 16.4934C7.62841 16.6148 7.78715 16.7099 7.9609 16.7734C8.13034 16.8439 8.31355 16.8804 8.49879 16.8804C8.68404 16.8804 8.86725 16.8439 9.03668 16.7734C9.21044 16.7099 9.36918 16.6148 9.5038 16.4934L16.5813 9.82686C16.714 9.70292 16.8193 9.55545 16.8911 9.39297C16.963 9.2305 17 9.05623 17 8.88022C17 8.7042 16.963 8.52993 16.8911 8.36746C16.8193 8.20498 16.714 8.05752 16.5813 7.93357Z"
        fill="white"
      />
    </svg>
  </button>
</div>

      </div>
    </div>
  );
};

export default hero;