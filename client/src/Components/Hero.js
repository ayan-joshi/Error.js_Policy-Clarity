
import React, { useState } from "react";
import axios from 'axios';



const Hero = () => {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type === 'application/pdf' && file.size <= 3 * 1024 * 1024) {
      // File is valid
      const reader = new FileReader();

  reader.onloadend = () => {
    const blob = new Blob([reader.result], { type: 'application/pdf' });
    setSelectedFile(blob);
  };

  reader.readAsArrayBuffer(file);
} else {
  // File is invalid
  alert('Please select a valid PDF file (up to 3 MB).');
  event.target.value = null; // Clear the file input
  setSelectedFile(null);
}
};

const handleUpload = async () => {
if (selectedFile) {
  try {
    // Simulating a backend API endpoint
    const response = await axios.post('/api/upload', selectedFile, {
      headers: {
        'Content-Type': 'application/pdf',
      },
    });

    console.log('Upload successful:', response.data);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
} else {
  alert('Please select a file first.');
}
};

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
        <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleUpload} className="bg-[#a382f7] text-black lg:px-8 lg:py-3 px-4 py-2 lg:text-xl text-sm text-center rounded-lg lg:rounded-xl font-medium">Upload</button>
</div>

      </div>
    </div>
  );
};

export default Hero;