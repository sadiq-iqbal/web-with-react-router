import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home";
import Contact from "./components/Contact";
import AboutLayout from "./components/Layout/AboutLayout";
import Profile from "./Profile";
import Dashborad from "./Dashborad";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path:"*",
        element:<h1>hello world </h1>
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path:'/about',
        element:<AboutLayout/>,
        children:[
          {
            path:'profile',
            element:<Profile/>
          },
          {
            path:'dashboard',
            element:<Dashborad/>
          }
        ]
      },
      {
        path:'/contact',
        element:<Contact/>
      },
    
      
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
