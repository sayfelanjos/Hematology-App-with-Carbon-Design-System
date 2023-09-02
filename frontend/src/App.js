import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InstitutionalPage from "./pages/institutional/InstitutionalPage";
import { Theme } from "@carbon/react";
import { useBoundStore } from "./store/useBoundStore";
import Layout from "./components/layout/Layout";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import { usersRoutes } from "./pages/users/usersRoutes";
import { suppliesRoutes } from "./pages/supplies/suppliesRoutes";
import { loginRoutes } from "./pages/login/loginRoutes";
import { dashboardRoutes } from "./pages/dashboard/dashboardRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InstitutionalPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "app",
    element: <Layout />,
    children: [dashboardRoutes, loginRoutes, usersRoutes, suppliesRoutes],
  },
  /*
   * TODO: do admin page.
   */
]);

const App = () => {
  const themeColor = useBoundStore(({ themeColor }) => themeColor);

  return (
    <Theme theme={themeColor}>
      <RouterProvider router={router}></RouterProvider>
    </Theme>
  );
};

export default App;
