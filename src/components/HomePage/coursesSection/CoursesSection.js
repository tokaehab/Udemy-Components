import React, { useContext } from "react";
import CoursesList from "./CoursesList";
import style from "../../../styles/coursesSection/CoursesSection.module.css";
import SectionDescription from "./SectionDescription";
import LoadingSpinner from "../../LoadingSpinner";
import CoursesContext from "../../../context/CoursesContext";

const CoursesSection = (props) => {
  const courses = useContext(CoursesContext);
  return (
    <section className={`${style.courses} ${style.paddedSection}`}>
      <SectionDescription>
        {courses && courses.length > 0 ? <CoursesList /> : <LoadingSpinner />}
      </SectionDescription>
    </section>
  );
};

export default CoursesSection;
