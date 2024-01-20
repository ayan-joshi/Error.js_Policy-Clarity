import React from 'react';

import Navbar  from './Components/Navbar';
import Hero from './Components/Hero'
import Features from './Components/Features';
import { BrowserRouter as Router } from 'react-router-dom';

const Home = () => {
  return (
    <Router>

    

   <Navbar />
   <Hero />
   <Features />


    {/* </> */}
    </Router>
  );
}

export default Home;

