import React from "react";
import style from "../../styles/coursesSection/Course.module.css";
import { Link } from "react-router-dom";
import RatingBar from "../RatingBar";
const Course = (props) => {
  return (
    <Link className={style.courseTemplate} to={`/course/${props.course.id}`}>
      <img src={props.course.image} alt={props.course.title} />
      <div className={style.courseDescription}>
        <h4>{props.course.title}</h4>
        <div className={style.author}>{props.course.author}</div>
        <RatingBar rating={props.course.rating} />({props.course.ratingCount})
        <h4>E£{props.course.price}</h4>
      </div>
    </Link>
  );
};

export default Course;
