import React from "react";
// Here we import the Project.css file to grant access to some additional classNames
import "../styles/Project.css";
//importing needed icons from font owesome
import { FaGitSquare, FaStaylinked } from "react-icons/fa";

//getting project details as props
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
      <div className="imgcontainer">
        <img src={require(`${imgUrl}`)} className="image" alt={ProjectName} />{" "}
        <div className="overlay">
          <div className="text">
            <a target="_blank" href={Repository}>
              <FaGitSquare size={25} />
            </a>
            <a target="_blank" href={Url}>
              <FaStaylinked size={25}> </FaStaylinked>{" "}
            </a>
          </div>
        </div>
      </div>

      <h4>{ProjectName}</h4>
      <h5>
        <strong>Description :</strong>
        <div className="descriptionClass">{ProjectDescription}</div>
      </h5>
      <h5>
        <strong>Technology :</strong>
        <div className="descriptionClass">{Technology}</div>
      </h5>
    </div>
  );
}

export default Project;
