import React from 'react';
import ProjectData from '../Data/Project.json';
import Project from '../Project';

import "../../styles/Portfolio.css";
export default function PortFolio() {
  return (<div className='ProjectItem'>
    {ProjectData.map((item, i) => (
        
   <Project Url={item.Url} Repository={item.Repository} imgUrl={item.imgUrl} ProjectName={item.ProjectName} ProjectDescription={item.ProjectDescription} Technology={item.Technology}></Project>
  ))}
  </div>)
}
