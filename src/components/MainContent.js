
import React,{ useState } from 'react';
import Header from './Header';
import Section from './Section';
import Footer from './Footer';

export default function MainContent() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
    const handlePageChange = (page) => setCurrentPage(page);
    return (    
        <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange}></Header>
        <Section currentPage={currentPage} handlePageChange={handlePageChange}></Section>
        <Footer></Footer>
        </div> 
         );
  }
  
  