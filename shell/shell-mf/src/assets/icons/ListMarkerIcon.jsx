import React from "react";

const STYLES = {
  cx: "5px",
  cy: "5px",
  r: "2px",
  fill: "white",
};

const ListMarkerIcon = () => {
  return (
    <svg
      style={STYLES}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle id="list-marker-icon" transform="matrix(1 0 0 -1 0 10)" />
    </svg>
  );
};
export default ListMarkerIcon;
