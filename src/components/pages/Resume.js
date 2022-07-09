import React from 'react';
import myResume from "../Doc/CV_Vinitha_Gowtheepan.pdf";
export default function Resume() {
  return (
    <div className='resumeContent'>
      <h1>Resume</h1>
     <h5>Please find my resume <a href={myResume} download="VinithaGowtheepan.pdf">here</a>
     </h5>
      <h3>FrontEnd</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>JQuery</li>
        <li>React</li>
        <li>Boostrap</li>
      </ul>
      <h3>BackEnd</h3>
      <ul>
        <li>Node Js</li>
        <li>Express</li>
        <li>C++,C#.net,Java,php,jsp and VB.net</li>
        <li>API</li>
        <li>MySQl,MSSQL,sequalize and entityframework</li>
        <li>MongoDB and mongoose</li>
        <li>GraphSQL</li>
        <li>Mern Stack</li>
      </ul>
    </div>
  );
}
