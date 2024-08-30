import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Services from './components/Services';
import About from './components/About';
import Proteams from './components/Proteams';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (

    <>
       <div className='slide-background'>
      <Navbar />
      <Slider />
    </div>

    <Services/>

    <div className='background_bubble'>
    <About/>
    </div>

    <Proteams/>

    <div className='background_bubble_1'>
    <Contact/>
    </div>

    <Footer/>


    </>

  


  );
}

export default App;
