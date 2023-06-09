import React from "react";
import "../../sass/themes/_themes.scss";
import { useThemeStore } from "globalStore/globalStore";

const UsersIcon = () => {
  const { theme } = useThemeStore();
  return (
    <svg
      name={"users-icon"}
      id={`${theme.color}-theme-users-icon`}
      width="37"
      height="36"
      viewBox="0 0 37 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30.832 31.5V28.5C30.832 26.9087 30.1999 25.3826 29.0747 24.2574C27.9495 23.1321 26.4233 22.5 24.832 22.5H12.832C11.2407 22.5 9.71461 23.1321 8.58939 24.2574C7.46417 25.3826 6.83203 26.9087 6.83203 28.5V31.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.832 16.5C22.1457 16.5 24.832 13.8137 24.832 10.5C24.832 7.18629 22.1457 4.5 18.832 4.5C15.5183 4.5 12.832 7.18629 12.832 10.5C12.832 13.8137 15.5183 16.5 18.832 16.5Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default UsersIcon;
