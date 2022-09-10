import React from "react";
import style from "../../../styles/accordion/AccordionItem.module.css";
const AccordionItem = (props) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`${props.index}`}>
        <button
          className={`accordion-button collapsed ${style.accordionHeader}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${props.index}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${props.index}`}
        >
          {props.header}
        </button>
      </h2>
      <div
        id={`flush-collapse${props.index}`}
        className="accordion-collapse collapse"
        aria-labelledby={`${props.index}`}
      >
        <div className="accordion-body">
          <ul>
            {props.contentPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AccordionItem;
