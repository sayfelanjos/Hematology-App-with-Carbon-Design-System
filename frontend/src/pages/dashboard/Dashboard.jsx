import React from "react";
import { useTheme } from "@carbon/react";
import { SimpleBarChart } from "@carbon/charts-react";
import "./ibm-plex-font.css";

const Dashboard = () => {
  const { theme } = useTheme();
  const state = {
    data: [
      {
        group: "Qty",
        value: 65000,
      },
      {
        group: "More",
        value: 29123,
      },
      {
        group: "Sold",
        value: 35213,
      },
      {
        group: "Restocking",
        value: 51213,
      },
      {
        group: "Misc",
        value: 16932,
      },
    ],
    options: {
      title: "Vertical simple bar (discrete)",
      axes: {
        left: {
          mapsTo: "value",
        },
        bottom: {
          mapsTo: "group",
          scaleType: "labels",
        },
      },
      height: "400px",
      theme: theme,
    },
  };
  return <SimpleBarChart data={state.data} options={state.options}></SimpleBarChart>;
};

export default Dashboard;
