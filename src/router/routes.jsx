import { createBrowserRouter } from "react-router";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Header from "../header/Header";
import NotFoundPage from "../pages/404/NotFoundPage";

const { data } = JSON.parse(localStorage.getItem("auth")) || {};
console.log("data: ", data);

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },

  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/header",
    element: <Header />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
