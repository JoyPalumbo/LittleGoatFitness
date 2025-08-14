import React from 'react';
import {Link} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';

import './App.css';


const Navbar = () => {
  return (

<nav className="navbar">
 <div className="navbar-left">
    <h1 className="headertitle ">Little Goat Fitness</h1>

  </div>
    <div className="navbar-center"></div>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

  {/* <div className="navbar-left">
    <a href="/" className="logo">
      ShopNow
    </a>
  </div> */}


  {/* <div className="navbar-center">
    
    <ul className="nav-links">
    <li>
        {/* <a href="/home">Home</a> */}
      {/* </li>
      <li>

      <a href="/about">About Us</a>
      </li>
      <li>
        <a href="/blog">Blog</a>
      </li>
      <li>
        <a href="/contact">Contact</a>
      </li>
    </ul>
  </div> */} 


  {/* <div className="navbar-right">
    <a href="/cart" className="cart-icon">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-count">0</span>
    </a>
    <a href="/account" className="user-icon">
      <i className="fas fa-user"></i>
    </a>
  </div> */}
</nav>
);
};

export default Navbar;