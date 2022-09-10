import React, { useContext, useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import CourseContent from "../components/CourseDetailsPage/courseContent/CourseContent";
import HeaderCard from "../components/CourseDetailsPage/HeaderCard/HeaderCard";
import LoadingSpinner from "../components/LoadingSpinner";
import NavigationBar from "../components/NavigationBar";
import Outcomes from "../components/CourseDetailsPage/outcomes/Outcomes";
import Requirements from "../components/CourseDetailsPage/requirements/Requirements";
import SideCard from "../components/CourseDetailsPage/sideCard/SideCard";
import CoursesContext from "../context/CoursesContext";

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const course = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const courses = useContext(CoursesContext);

  useEffect(() => {
    if (courses && courses.length > 0) {
      for (var i = 0; i < courses.length; i++) {
        if (courses[i].id == courseId) {
          course.current = courses[i];
          break;
        }
      }
      setIsLoading(false);
    }
  }, [courses]);
  return (
    <>
      <NavigationBar />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SideCard course={course} />
          <HeaderCard course={course} />
          <Outcomes course={course} />
          <CourseContent course={course} />
          <Requirements course={course} />
        </>
      )}
    </>
  );
};

export default CourseDetailsPage;
