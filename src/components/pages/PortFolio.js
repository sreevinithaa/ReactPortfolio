import React from 'react';
import ProjectData from '../Data/Project.json';
import Project from '../Project';
export default function PortFolio() {
  return ProjectData.map((item, i) => (
   <Project Url={item.Url} Repository={item.Repository} imgUrl={item.imgUrl} ProjectName={item.ProjectName} ProjectDescription={item.ProjectDescription} Technology={item.Technology}></Project>
  ));
}
