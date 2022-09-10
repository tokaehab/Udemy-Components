import React from "react";
import OutcomeItem from "./OutcomeItem";
import style from "../../../styles/outcome/Outcomes.module.css";

const Outcomes = (props) => {
  return (
    <div className={style.frame}>
      <h2>What you'll learn</h2>
      <div className={style.list}>
        {props.course.current.outcomes.map((outcome, index) => (
          <OutcomeItem key={index} content={outcome} />
        ))}
      </div>
    </div>
  );
};
export default Outcomes;
