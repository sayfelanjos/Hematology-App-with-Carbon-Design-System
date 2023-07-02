import React, { useEffect } from "react";
import {
  ReactLocation,
  Router,
  createMemoryHistory,
  createBrowserHistory,
} from "@tanstack/react-location";
const useRouteStore =
  process.env.NODE_ENV === "development"
    ? () => null
    : React.lazy(() =>
        import("globalStore/globalStore").then((res) => ({
          default: res.useRouteStore,
        })),
      );
import UsersTable from "./pages/list/UsersTable";
import Profile from "./pages/profile/Profile";
import PasswordForm from "./components/password-form/PasswordForm";
import PersonalInformationForm from "./components/personal-information-form/PersonalInformationForm";
import SettingsForm from "./components/settings-form/SettingsForm";
import Layout from "./components/layout/Layout";

// Create a memory history
const memoryHistory =
  process.env.NODE_ENV === "development"
    ? createBrowserHistory({
        initialEntries: ["/"], // Pass your initial url
      })
    : createMemoryHistory({
        initialEntries: ["/"], // Pass your initial url
      });

// Set up a ReactLocation instance with the memory history
const location = new ReactLocation({
  history: memoryHistory,
});

function App() {
  const routes = [
    {
      path: "users",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <UsersTable />,
        },
        {
          path: "list",
          element: <UsersTable />,
        },
        {
          path: "profile",
          element: <Profile />,
          children: [
            {
              path: "/",
              element: <PersonalInformationForm />,
            },
            {
              path: "personal",
              element: <PersonalInformationForm />,
            },
            {
              path: "password",
              element: <PasswordForm />,
            },
            {
              path: "settings",
              element: <SettingsForm />,
            },
          ],
        },
      ],
    },
  ];
  if (process.env.NODE_ENV === "production") {
    const { route, updateRoute } = useRouteStore((state) => state.route);

    location.history.listen(({ location }) => {
      updateRoute(location.pathname);
    });

    useEffect(() => {
      location.history.push(route.pathname);
    }, [route.pathname]);
  }

  return <Router location={location} routes={routes} />;
}

export default App;
