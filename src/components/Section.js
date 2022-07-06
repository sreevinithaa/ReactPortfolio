import React from 'react';

import '../styles/Section.css';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import PortFolio from './pages/PortFolio';
import Resume from './pages/Resume';

function Section({ currentPage, handlePageChange }) {
   const renderPage = () => {
      if (currentPage === 'AboutMe') {
        return <AboutMe />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      if (currentPage === 'PortFolio') {
        return <PortFolio />;
      }
      return <ContactMe />;
    };
    return (
       <section className='content'>
         
         {renderPage()}
        </section>
      
    );
  }
  
  export default Section;