import './App.css';
import './Homepage.css'
import {Home} from "./Components/Home"
import {Dashboard} from "./Components/Dashboard"
// import {NewDashboard} from "./Components/NewDashboard"
import {ContactUs} from "./Components/ContactUs"
import {Register} from "./Components/Register"
import { Referals } from './Components/Referals';
import HeaderBg from './Components/HeaderBg';
import Contact from './Components/Contact';
import RegisterPage from './Components/RegisterPage';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {ScrollToTop} from "./Components/SrollToTop"
import NewDashboard from './Components/NewDashboard';
// import initializeFirebase from './Components/firebase';
// import Contact from './Components/Contact';
import { useEffect } from 'react';
import React from 'react';
import app from './Components/firebase';

function App() {

  // React.useEffect(()=>{
  //   initializeFirebase()},[])

  return (
    <Router>
      <ScrollToTop>
    <Routes> 
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/signup' element={<RegisterPage/>}/>
    <Route path='/Dashboard/*' element={<NewDashboard/>}/>
    {/* <Route path='/l' element={<Home/>}/> */}
    </Routes>
    </ScrollToTop>

    </Router>
    // <Router> 
    // <nav>
    //   <Link to='/'>Home</Link>
    //   <Link to='/contact' >Contact</Link>
    // </nav>
    // <Routes> 
    // <Route path='/' element={<Home/>} />
    // <Route path='/contact' element={<Contact/>} />


    // </Routes>
    // </Router>
  );
}

export default App;
