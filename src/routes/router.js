import { useRoutes } from "react-router-dom";
import CourseDetailsPage from "../pages/CourseDetailsPage";
import HomePage from "../pages/HomePage";

export default function Router() {
  let element = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/course/:courseId",
      element: <CourseDetailsPage />,
    },
  ]);
  return element;
}
