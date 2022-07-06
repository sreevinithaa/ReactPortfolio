import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';
import Navbar from './Navbar';
function Header({ currentPage, handlePageChange }) {
    // TODO: Add a style attribute to header and the h1 element
  
    return (
        <div className="header">
        <h1>Vinitha Gowtheepan</h1>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange}></Navbar>
        </div>
    );
  }
  
  export default Header;