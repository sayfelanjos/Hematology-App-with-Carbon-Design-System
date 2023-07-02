import React, { lazy } from "react";
import { createBrowserRouter, Outlet, Redirect, RouterProvider } from "react-router-dom";
import InstitutionalPage from "./pages/institutional/InstitutionalPage";
import LoginPage from "./pages/login/LoginPage";
import { Theme } from "@carbon/react";
import { useBoundStore } from "./store/useBoundStore";
import Layout from "./components/layout/Layout";
import history from "history/browser";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import Dashboard from "./pages/dashboard/Dashboard";
const useRouteStore =
  process.env.NODE_ENV === "development"
    ? () => null
    : lazy(() =>
        import("globalStore/globalStore").then((res) => ({
          default: res.useRouteStore,
        })),
      );

const router = createBrowserRouter([
  {
    path: "/",
    element: <InstitutionalPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "app",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  /*
   * TODO: do admin page.
   */
]);

const App = () => {
  const themeColor = useBoundStore(({ themeColor }) => themeColor);
  if (process.env.NODE_ENV === "production") {
    const { updateRoute } = useRouteStore();
    history.listen(({ location }) => {
      updateRoute(location.pathname);
    });
  }

  return (
    <Theme theme={themeColor}>
      <RouterProvider router={router}></RouterProvider>
    </Theme>
  );
};

export default App;
