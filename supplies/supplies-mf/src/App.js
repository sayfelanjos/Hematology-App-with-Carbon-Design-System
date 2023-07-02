import React, { useEffect } from "react";
import { ReactLocation, Router, createBrowserHistory } from "@tanstack/react-location";
import SupplyTable from "./pages/supply-table/SupplyTable";
import NewSupply from "./pages/new-supply/NewSupply";
import Layout from "./components/layout/Layout";
import "./App.scss";
import { Theme, useTheme } from "@carbon/react";
const useRouteStore =
  process.env.NODE_ENV === "development"
    ? () => null // Render nothing in development
    : React.lazy(() =>
        // Lazy load in production
        import("store/store").then((res) => ({
          default: res.useRouteStore,
          // For Embedded Mode
          // default: res.useRouteStore
        })),
      );

// Create a memory history
const routerHistory = createBrowserHistory({
  initialEntries: ["/"], // Pass your initial url
});

// Set up a ReactLocation instance with the memory history
const location = new ReactLocation({
  history: routerHistory,
});

function App() {
  const { theme } = useTheme();
  const routes = [
    {
      path: "supplies",
      element: (
        <Theme theme={theme}>
          <Layout />
        </Theme>
      ),
      children: [
        {
          path: "/",
          element: <SupplyTable />,
        },
        {
          path: "list",
          element: <SupplyTable />,
        },
        {
          path: "new",
          element: <NewSupply />,
        },
        /*
         * TODO: do products details page.
         */
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
