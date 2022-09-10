import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import style from "../../../styles/accordion/Accordion.module.css";

const Accordion = (props) => {
  const [showMore, setShowMore] = useState(false);
  const numberOfItems = showMore
    ? props.lectures.length
    : Math.min(5, props.lectures.length);
  const onShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      {props.lectures.slice(0, numberOfItems).map((lecture, index) => {
        return (
          <AccordionItem
            key={lecture}
            index={index}
            header={lecture}
            contentPoints={props.content[index]}
          />
        );
      })}

      <button className={style.showMoreBtn} onClick={onShowMore}>
        Show {showMore ? "less" : "more"}
      </button>
    </div>
  );
};

export default Accordion;
