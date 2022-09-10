import React from "react";
import style from "../../../styles/courseContent/CourseContent.module.css";
import Accordion from "../accordion/Accordion";

const CourseContent = (props) => {
  return (
    <div className={style.container}>
      <h2>Course Content</h2>
      <Accordion
        lectures={props.course.current.lectures}
        content={props.course.current.content}
      />
    </div>
  );
};
export default CourseContent;
