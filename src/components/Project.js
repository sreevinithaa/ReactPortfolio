import React from "react";
// Here we import the Navbar.css file to grant access to some additional classNames
import "../styles/Project.css";
import { FaGitSquare,FaStaylinked } from "react-icons/fa";
function Project({
  Url,
  Repository,
  imgUrl,
  ProjectName,
  ProjectDescription,
  Technology,
}) {
   
  return (
    

    <div className="project_item">

<div class="imgcontainer">
<img src={require(`${imgUrl}`)} class="image"  alt={ProjectName} />{" "}
  <div class="overlay">
    <div class="text"><a target="_blank" href={Repository}><FaGitSquare size={30} /></a><a target="_blank" href={Url}><FaStaylinked size={30}> </FaStaylinked>  </a></div>
  </div>
</div>
      
 
      <h4>{ProjectName}</h4>
      <h5>
        <strong>Description :</strong>
        {ProjectDescription}
      </h5>
      <h5>
        <strong>Technology :</strong>
        {Technology}
      </h5>
      
    </div>
  );
}

export default Project;
