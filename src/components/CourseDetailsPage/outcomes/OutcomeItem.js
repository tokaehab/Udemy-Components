import React from "react";
import style from "../../../styles/outcome/OutcomeItem.module.css";
const OutcomeItem = (props) => {
  return (
    <div className={style.item}>
      <i className={`fa fa-check ${style.icon}`} aria-hidden="true"></i>
      {props.content}
    </div>
  );
};

export default OutcomeItem;
