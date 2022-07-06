import React from "react";
// Here we import the Navbar.css file to grant access to some additional classNames
import "../styles/Project.css";

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
      <a target="_blank" href={Url}>
        <img src={require(`${imgUrl}`)} alt={ProjectName} />{" "}
      </a>
      <h4>{ProjectName}</h4>
      <h5>
        <strong>Description :</strong>
        {ProjectDescription}
      </h5>
      <h5>
        <strong>Technology :</strong>
        {Technology}
      </h5>
      <h5>
        <strong>Repository :</strong>
        <a target="_blank" href={Repository}>
          {ProjectName}
        </a>
      </h5>
    </div>
  );
}

export default Project;
