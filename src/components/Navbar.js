import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../styles/Nav.css';

function Navbar({ currentPage, handlePageChange }) {
  
    return (
        <nav className="navbar">
        <li><a   href="#AboutMe"
         className={currentPage=='AboutMe'?"nav-link nav-active":"nav-link"}
          onClick={() => handlePageChange('AboutMe')}>About Me</a></li>
        <li><a  href="#Portfolio"
       className={currentPage=='PortFolio'?"nav-link nav-active":"nav-link"}
          onClick={() => handlePageChange('PortFolio')}>Portfolio</a></li>
        <li><a  href="#ContactMe"
         className={currentPage=='ContactMe'?"nav-link nav-active":"nav-link"}
          onClick={() => handlePageChange('ContactMe')}>Contact Me</a></li>
        <li><a  href="#Resume"
         className={currentPage=='Resume'?"nav-link nav-active":"nav-link"}
          onClick={() => handlePageChange('Resume')}>Resume</a></li>
       </nav>
      
    );
  }
  
  export default Navbar;