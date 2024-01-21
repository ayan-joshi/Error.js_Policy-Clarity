import React from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Contact from "./Components/Contact";
import Features from "./Components/Features";
import Blogs from "./Components/Blogs";
import { BrowserRouter as Router } from "react-router-dom";

const Home = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Features />
      <Blogs />
      <Contact />

      {/* </> */}
    </Router>
  );
};

export default Home;
