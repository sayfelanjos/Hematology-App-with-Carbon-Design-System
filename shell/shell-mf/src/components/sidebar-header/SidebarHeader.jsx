import React from "react";
import "./SidebarHeader.scss";
import "../../sass/themes/_themes.scss";
import LogoIcon from "../../assets/icons/LogoIcon";
import "../../sass/base/_typography.scss";
import { useThemeStore } from "globalStore/globalStore";

const SidebarHeader = () => {
  const { theme } = useThemeStore();

  return (
    <div
      className={`sidebar-header 
        ${theme.color}-theme-sidebar-header-container
      `}>
      <LogoIcon />
      <h1
        className={`app.name ${theme.color}-theme-app-name
         semi-bold-normal-monospace-24`}>
        Hematologia
      </h1>
    </div>
  );
};
export default SidebarHeader;
