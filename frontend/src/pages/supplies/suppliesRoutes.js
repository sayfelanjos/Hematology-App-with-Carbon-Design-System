import React from "react";
import SupplyTable from "./components/supply-table/SupplyTable";
import NewSupply from "./components/new-supply/NewSupply";

export const suppliesRoutes = {
  path: "supplies",
  children: [
    {
      path: "",
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
};
