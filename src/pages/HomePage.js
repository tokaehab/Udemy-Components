import React from "react";
import CoursesSection from "../components/coursesSection/CoursesSection";
import MainCard from "../components/mainCard/MainCard";
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
