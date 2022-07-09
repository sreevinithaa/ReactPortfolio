import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Footer.css';
import myResume from "../components/Doc/CV_Vinitha_Gowtheepan.pdf";
import { FaLinkedinIn,FaGithub,FaCloudDownloadAlt } from "react-icons/fa";
function Footer() {
   
    return (
        <div className="footer">
         <a href='https://www.linkedin.com/in/vinitha-gowtheepan-a0a70926/' target="_blank"><FaLinkedinIn /></a><a href='https://github.com/sreevinithaa' target="_blank"><FaGithub /></a><a href={myResume} download="VinithaGowtheepan.pdf"><FaCloudDownloadAlt /></a>
        
        </div>
    );
  }
  
  export default Footer;