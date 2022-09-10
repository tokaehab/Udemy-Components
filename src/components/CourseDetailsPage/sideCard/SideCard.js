import React from "react";
import style from "../../../styles/sideCard/SideCard.module.css";

const SideCard = (props) => {
  return (
    <div className={style.container}>
      <a target="_blank" href={props.course.current.link}>
        <img src={props.course.current.image} className={style.img} />
      </a>
      <div className={style.contentContainer}>
        <h2 className={style.price}>E£{props.course.current.price}</h2>
        <div className={style.centered}>
          <button className={`${style.primaryBtn} ${style.btn}`}>
            Add to cart
          </button>
          <button className={`${style.secondryBtn} ${style.btn}`}>
            Buy now
          </button>
          <p>30-Day Money-Back Guarantee</p>
        </div>
        <h6>This course includes:</h6>
        <p>
          <i
            className={`fa fa-television ${style.icon}`}
            aria-hidden="true"
          ></i>
          {props.course.current.videosTime} hours on-demand video
        </p>
        <p>
          <i className={`fa fa-file ${style.icon}`} aria-hidden="true"></i>1
          article
        </p>
        <p>
          <i className={`fa fa-download ${style.icon}`} aria-hidden="true"></i>3
          downloadable resources
        </p>
        <p>
          <i className={`fa fa-clock-o ${style.icon}`} aria-hidden="true"></i>
          Full lifetime access
        </p>
        <p>
          <i className={`fa fa-mobile ${style.icon}`} aria-hidden="true"></i>
          Access on mobile and TV
        </p>
        <p>
          <i className={`fa fa-trophy ${style.icon}`} aria-hidden="true"></i>
          Certificate of completion
        </p>
        <div className={style.actions}>
          <a>Share</a>
          <a>Gift this course</a>
          <a>Apply Coupon</a>
        </div>
      </div>
      <div className={`${style.contentContainer} ${style.businessContainer}`}>
        <h6>Training 5 or more people?</h6>
        Get your team access to 17,000+ top Udemy courses anytime, anywhere.
        <button className={`${style.btn} ${style.secondryBtn}`}>
          Try Udemy Business
        </button>
      </div>
    </div>
  );
};
export default SideCard;
