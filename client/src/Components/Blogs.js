import React from 'react';
import Blog1 from '../assets/blog1.jpg' 
import Blog2 from '../assets/blog2.jpg'
import Blog3 from '../assets/blog3.jpg' 
import Blog4 from '../assets/blog4.jpg'


const Blogs = () => {
  const array = [
    {
      title: {

        img: Blog1,
        link: "https://www.zeebiz.com/personal-finance/insurance/news-health-insurance-5-problems-that-indian-insurance-policyholders-face-the-most-stst-249581"
      },
      description: '5 problems that Indian insurance policyholders face the most'
    },
    {
      title: {
        img: Blog2,
        link: "https://myhealthmath.com/2020/09/02/how-to-read-your-summary-of-benefits-and-coverage-tips-for-interpreting-your-plan-documents/"
      },
      description: 'How to Read A Summary of Benefits and Coverage: Tips for interpreting your plan documents'
    },
    {
      title: {
        img: Blog3,
        link: "https://www.tn.gov/attorneygeneral/working-for-tennessee/consumer/resources/materials/healthcare-scams.html"

      },
      description: 'What You Need to Know about Health Care Scams.'
    },
    {
     
      title: {
        img: Blog4,
        link: "https://www.hdfcergo.com/blogs/health-insurance/fraud-and-health-insurance-claims"
      },
      description: 'Fraud and Health Insurance Claims – Here’s What You Need to Know'
    },




  ];

  return (
    
    <div id="blogs" className="flex flex-col justify-center items-center overflow-x-auto bg-gradient-to-r from-white-900 via-white-600 to-white-400 ... ">
  <div className="text-center w-full mb-5">
    <p className="text-6xl font-bold">Blogs</p>
  </div>
  <div className="flex flex-wrap justify-center items-center gap-6">
    {array.map((item, index) => (
      <div
        key={index}
        className='flex flex-col items-center bg-white w-[290px] h-[380px] sm:w-[350px] sm:h-[400px] text-black mx-auto rounded-2xl p-5 shadow-lg mb-6'
      >
        <div className='flex flex-col items-center justify-around h-full'>
          <div className='flex flex-col items-center justify-center gap-1 sm:flex-row'>
            <img src={item.title.img} alt='' className='w-20 h-20 rounded-full sm:h-28 sm:w-28 mx-auto sm:mx-0' />
            <div className='flex flex-col items-center justify-center sm:items-start sm:justify-start'>
              <p className='font-semibold uppercase'>{item.title.head}</p>
              <p className='text-center'>{item.title.designation}</p>
              {/* <p>Age: {item.title.age}</p> */}
            </div>
          </div>
          <div className='mt-5'>{item.description}</div>
          <div className='flex justify-center w-full mt-3'>
            <a className='flex items-center justify-between gap-2 px-5 py-2 text-white transition-all duration-1000 bg-black border border-black rounded-lg connect group hover:text-black hover:bg-white' href={item.title.link} target='_blank'>
              Read More
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    )}


export default Blogs;
