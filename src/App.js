import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Services from './components/Services';
import About from './components/About';
import Proteams from './components/Proteams';


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
    </>
  );
}

export default App;
