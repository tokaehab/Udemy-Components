import React, { useEffect, useContext, useState } from "react";
import Course from "./Course.js";
import style from "../../../styles/coursesSection/CoursesList.module.css";
import CoursesContext from "../../../context/CoursesContext.js";
import { useSearchParams } from "react-router-dom";

const CoursesList = () => {
  const courses = useContext(CoursesContext);
  const [search] = useSearchParams();
  const [selectedCourses, setSelectedCourses] = useState([]);
  let searchValue = search.get("SearchValue");
  useEffect(() => {
    if (searchValue) {
      let searchResult = courses.filter((course) =>
        course.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSelectedCourses(searchResult);
    } else {
      setSelectedCourses(courses);
    }
  }, [searchValue, courses]);

  return (
    <ul className={style.coursesList}>
      {selectedCourses.map((course) => {
        return <Course key={course.id} course={course}></Course>;
      })}
    </ul>
  );
};

export default CoursesList;
