import React, { useState } from "react";
//import header component
import Header from "./Header";
//import section component
import Section from "./Section";
//import footer component
import Footer from "./Footer";

export default function MainContent() {
    // Declare a new state variable, which we'll call "currentPage"
  const [currentPage, setCurrentPage] = useState("AboutMe");
  //declare a function call handlepagechange which takes one argument
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
        {/* Passing currentpage,handlepagechange as props to header and section component */}
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Header>
      <Section
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      ></Section>
      <Footer></Footer>
    </div>
  );
}
