import React from "react";
import style from "../../../styles/HeaderCard/HeaderCard.module.css";
import RatingBar from "../../RatingBar";

const HeaderCard = (props) => {
  return (
    <div className={style.container}>
      <div className={style.headerDescription}>
        <p className={style.path}>
          <a>Development</a>
          {"   >   "}
          <a> Programming Languages</a>
          {"   >   "}
          <a>{props.course.current.category}</a>
        </p>
        <img className={style.img} src={props.course.current.image} />
        <h1>{props.course.current.title}</h1>
        <h3>{props.course.current.Introduction}</h3>
        <RatingBar rating={props.course.current.rating} />
        <a className={`${style.rating} ${style.link}`}>
          ({props.course.current.ratingCount})
        </a>
        {props.course.current.enrollCount}
        {" students"}
        <p>
          Created by{" "}
          <a className={style.link}>{props.course.current.author.name}</a>
        </p>
        <div className={style.properties}>
          <i
            className={`fa fa-exclamation-circle ${style.firstIcon} `}
            aria-hidden="true"
          ></i>
          Last updated {props.course.current.lastUpdate}
        </div>
        <div className={style.properties}>
          <i className={`fas fa-globe ${style.icon}`}></i>
          English
        </div>
        <div className={style.properties}>
          <i className={`fa fa-cc ${style.icon}`} aria-hidden="true"></i>
          English
        </div>
      </div>
      <div className={style.stickyFooter}>
        <div>
          <h6>{props.course.current.title}</h6>
          <span className={style.star}>
            {props.course.current.rating}
            <i className="fa fa-star" aria-hidden="true"></i>
          </span>
          <a className={`${style.rating} ${style.link}`}>
            ({props.course.current.ratingCount})
          </a>
          {props.course.current.enrollCount}
          {" students"}
        </div>
        <div className={style.boldText}>
          E£{props.course.current.price}
          <button className={`${style.btn} ${style.boldText}`}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
