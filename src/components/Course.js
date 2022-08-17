import React from "react";
import style from "./Course.module.css";
const Course = (props) => {
  return (
    <div className={style.courseTemplate}>
      <img src={props.image} alt={props.title} />
      <div className={style.courseDescription}>
        <h4>{props.title}</h4>
        <div className={style.author}>{props.author}</div>
        <div className={style.rating}>
          {props.rating}
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
        ({props.views})<h4>E£{props.price}</h4>
      </div>
    </div>
  );
};

export default Course;
