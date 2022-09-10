import React from "react";
import CoursesSection from "../components/HomePage/coursesSection/CoursesSection";
import MainCard from "../components/HomePage/mainCard/MainCard";
import NavigationBar from "../components/NavigationBar";
const HomePage = (props) => {
  return (
    <>
      <NavigationBar />
      <MainCard />
      <CoursesSection />
    </>
  );
};
export default HomePage;
