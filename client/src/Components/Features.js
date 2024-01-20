import React from 'react';

const Features = () => {
  return (
    <div className='flex justify-center items-center py-44 flex-col relative'>
      <div className="absolute lg:top-60 top-96 right-8  lg:right-20  ">
        <img alt="content" width={100} height={50} src='/Sahil.svg' />
      </div>
      <div className="absolute lg:top-60 top-[6.5rem] left-8   lg:left-24  ">
        <img alt="content" width={100} height={50} src='/Vibhor.svg' />
      </div>

      <div className='flex justify-center items-center gap-3 flex-col 3xl:w-1/3  xl:w-[50%]  w-full lg:px-0 px-12'>
  <p className='text-black text-center  lg:text-6xl sm:text-4xl text-3xl tracking-normal lg:-tracking-[2px]'>Ideas and Design Where It All Begins</p>
  <p className='text-[#959499] text-center lg:text-xl text-lg font-normal'>Starting with idea brainstorming, we design a user-centric experience from landing page to product interaction.</p>
     </div>


      <div>
        <section className="">
          <div className=" max-w-5xl py-24 flex justify-center items-center">
            <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-6 gap-8 lg:px-0 px-8 -mb-10 text-center ">

              <div className={`sm:w-1/2  border border-[#282A3A] overflow-hidden rounded-2xl lg:h-[560px] `}>
                <div className='lg:px-10 px-6 pt-6 lg:pt-12 pb-5'>
                  <h2 className={`text-left lg:text-[30px] text-xl font-semibold text-[#6950FC] tracking-normal lg:-tracking-[2px] `}>ROI based</h2>
                  <h2 className="text-left lg:text-[30px]  text-xl font-semibold text-white  tracking-normal lg:-tracking-[2px] mt-1 lg:mt-2">Product Design</h2>
                  <p className="leading-relaxed  lg:text-[16px] text-sm  text-left py-4 text-[#959499]">
                    Add collaborative experiences you know and love like text editors, forms, creative tools, and whiteboards with Liveblocks APIs and tools.
                  </p>

                </div>
                <div className={`rounded-lg h-full w-full lg:mt-16 mt-0 ml-10 lg:ml-10 overflow-hidden `}>
                  <img alt="content" width={600} height={600} src="/webp/browser.webp" />
                </div>
              </div>

              <div className="sm:w-1/2 lg:h-[556px] h-[350px] overflow-hidden border border-[#282A3A] rounded-2xl">
                <div className='lg:px-10 px-6 pt-6 lg:pt-12 pb-5'>
                  <h2 className={`text-left lg:text-[30px] text-xl font-semibold text-[#6950FC] tracking-normal lg:-tracking-[2px] `}>Conversion based</h2>
                  <h2 className="text-left lg:text-[30px] text-xl font-semibold text-white mt-1 lg:mt-2 tracking-normal lg:-tracking-[2px]">Landing Pages.</h2>
                  <p className="leading-relaxed  lg:text-[16px] text-sm  text-left py-4 text-[#959499]">
                    Add collaborative experiences you know and love like text editors, forms, creative tools, and whiteboards with Liveblocks APIs and tools.
                  </p>

                </div>
                <div className={`rounded-lg h-full w-full lg:h-80 lg:ml-10 ml-10 mt-0 lg:mt-10 overflow-hidden `}>
                  <img alt="content" width={500} height={550} src='/frames.svg' />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;
