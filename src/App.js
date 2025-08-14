
import './App.css';
// import { Routes, Route } from "react-router-dom"
// import { BrowserRouter } from "react-router";
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import { NavLink, Link } from "react-router";
import Header from './Header';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Nav from './Nav'

function App() {
  return (

      <body className='background'> 
          <div className="App">
               <BrowserRouter>
      <Nav /> {/* Navbar appears on all routes */}
      <Routes>
     <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    {/* <BrowserRouter>
    </BrowserRouter> */}
 {/* <NavLink to="/About" >About</NavLink> */}
    {/* <Router>
      <Blog />
      <Route path="about" element={ <About/> } />
    </Router> */}
          {/* <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>  */}

   
      </div>
      </body>


  );
}

export default App;
