import React from "react";
import style from "../styles/RatingBar.module.css";
const RatingBar = (props) => {
  return (
    <div className={style.rating}>
      {props.rating}
      <i className="fa fa-star" aria-hidden="true"></i>
      <i className="fa fa-star" aria-hidden="true"></i>
      <i className="fa fa-star" aria-hidden="true"></i>
      <i className="fa fa-star" aria-hidden="true"></i>
      <i className="fas fa-star-half-alt"></i>
    </div>
  );
};

export default RatingBar;
