import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Marqee from "./Components/Marqee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Featured from "./Components/Featured";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { motion } from "motion/react";
import Loader from "./Components/Loader";
// import Loader from "./Components/Loader";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
  
      <>
        
    <div className="bg-black ">

        <Loader/>
        <Navbar/>
         <Hero />
        <Marqee />
        <About />
        <Eyes />
        <Featured />
        <Cards />
        <Footer />
        
    </div>
     
        
      </>
  );
}

export default App;
