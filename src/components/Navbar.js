import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Nav.css';

function Navbar() {
  
    return (
        <nav className="navbar">
        <li><a>About Me</a></li>
        <li><a>Portfolio</a></li>
        <li><a>Contact Me</a></li>
        <li><a>Resume</a></li>
       </nav>
      
    );
  }
  
  export default Navbar;