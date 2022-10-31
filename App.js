/*import React from 'react';*/
import './App.css';
import Navbar from './components/Navbar.js';
import Banner from './components/Banner';
import Experience from './components/experience';
import Education from './components/education';
import Contact from './components/contact';



function App(){
  return (
    
    <div className="App">
     <Navbar/>
     <Banner/>
     <Experience/>
     <Education/>
     <Contact/>

    </div>  
  )
}


export default App;
