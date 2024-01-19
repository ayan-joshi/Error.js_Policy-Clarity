import './App.css';
import React from 'react';
import Navbar from './Components/navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';


function App() {
  return (
    <div className="App">
       <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
