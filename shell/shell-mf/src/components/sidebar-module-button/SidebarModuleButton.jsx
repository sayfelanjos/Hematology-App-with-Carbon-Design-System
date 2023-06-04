import React, { useState } from "react";
import "./SidebarModuleButton.scss";
import "../../sass/base/_typography.scss";
import "../../sass/themes/_themes.scss";
import { useThemeStore, useSidebarStore } from "globalStore/globalStore";

const SidebarModuleButton = (props) => {
  const [state, toggleState] = useState(false);
  const { sidebar } = useSidebarStore((state) => state.sidebar);
  const { theme } = useThemeStore();
  const whenClicked = () => {
    toggleState(!state);
    props.onClick();
  };

  return (
    <button
      className={`module-button ${
        state
          ? `module-button ${theme.color}-theme-button-pressed`
          : `module-button ${theme.color}-theme-button`
      }`}
      onClick={whenClicked}>
      <span className="module-button-text">{props.moduleName}</span>
    </button>
  );
};

export default SidebarModuleButton;
