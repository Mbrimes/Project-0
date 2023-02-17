import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Certificates from './Pages/Certificates';


function Main(){
  return(
    <> 
    <Router>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/Portfolio" element={<Portfolio/>} />
    <Route path="/Certificates" element={<Certificates/>} />
    </Routes>
    </Router>
    </>
    )
};
export default Main;