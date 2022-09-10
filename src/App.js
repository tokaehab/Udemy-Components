import { useEffect, useState } from "react";
import CoursesContext from "./context/CoursesContext.js";
import { useSearchParams } from "react-router-dom";
import Router from "./routes/router.js";

function App() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
        setSearch({});
      });
  }, []);
  return (
    <CoursesContext.Provider value={courses}>
      <Router />
    </CoursesContext.Provider>
  );
}

export default App;
