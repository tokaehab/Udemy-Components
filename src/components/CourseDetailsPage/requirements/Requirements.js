import React from "react";
import style from "../../../styles/requirements/Requirements.module.css";
const Requirements = (props) => {
  return (
    <div className={style.container}>
      <h2>Requirements</h2>
      <ul>
        {props.course.current.requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
    </div>
  );
};
export default Requirements;
