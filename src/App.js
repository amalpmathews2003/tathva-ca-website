import './App.css';
import './Homepage.css'
import {Home} from "./Components/Home"
import {Dashboard} from "./Components/Dashboard"
import {ContactUs} from "./Components/ContactUs"
import {Register} from "./Components/Register"
import { Referals } from './Components/Referals';
import HeaderBg from './Components/HeaderBg';
import Contact from './Components/Contact';
import RegisterPage from './Components/RegisterPage';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {ScrollToTop} from "./Components/SrollToTop"
// import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop>
    <Routes> 
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/signup' element={<RegisterPage/>}/>
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
