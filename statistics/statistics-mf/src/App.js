import React from "react";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Theme } from "@carbon/react";
import Dashboard from "./components/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "dashboard", element: <Dashboard /> }],
  },
]);

const App = () => {
  return (
    <Theme theme="g90">
      <RouterProvider router={router} />
    </Theme>
  );
};

export default App;
