import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Redistration from "../pages/Redistration";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../components/NewsDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import Loading from "../pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loading></Loading>
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      { path: "/auth/logIn", element: <LogIn></LogIn> },
      { path: "/auth/reg", element: <Redistration></Redistration> },
    ],
  },
  {
    path: "/cardDetails/:id",
    element: (
      <PrivetRoute>
        <NewsDetails></NewsDetails>
      </PrivetRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
