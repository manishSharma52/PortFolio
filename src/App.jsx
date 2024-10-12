import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    // <div className="overflow-x-hidden text-neutral-300 antialiased selection: bg-cyan-100 selection:text-cyan-900">
    

    
    <div className=" container mx-auto px-8 selection:bg-slate-400 selection:text-black ">
     
      <Navbar />
      <Hero/>
      <About/>
      <Technologies/>
      <Projects/>
      <Contact/>
    </div>
    // </div>
  );
}

export default App;
