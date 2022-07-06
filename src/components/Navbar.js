import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Nav.css';

function Navbar({ currentPage, handlePageChange }) {
  
    return (
        <nav className="navbar">
        <li><a   href="#AboutMe"
          onClick={() => handlePageChange('AboutMe')}>About Me</a></li>
        <li><a  href="#Portfolio"
          onClick={() => handlePageChange('PortFolio')}>Portfolio</a></li>
        <li><a  href="#ContactMe"
          onClick={() => handlePageChange('ContactMe')}>Contact Me</a></li>
        <li><a  href="#Resume"
          onClick={() => handlePageChange('Resume')}>Resume</a></li>
       </nav>
      
    );
  }
  
  export default Navbar;