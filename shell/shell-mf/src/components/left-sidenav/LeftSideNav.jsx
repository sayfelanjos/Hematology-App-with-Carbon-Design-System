import React from "react";
import { useLocation } from "react-router-dom";
import { SideNav, SideNavItems, SideNavMenu, SideNavMenuItem, Theme } from "@carbon/react";
import { InventoryManagement } from "@carbon/react/icons";
import styles from "./ShellLeftPanel.module.scss";

const ShellLeftPanel = (props) => {
  const { onClickSideNavExpand, isSideNavExpanded } = props;
  const location = useLocation();
  return (
    <SideNav
      className={styles["side-nav"]}
      aria-label="Side navigation"
      isRail
      expanded={isSideNavExpanded}
      href="#main-content"
      onOverlayClick={onClickSideNavExpand}
      onSideNavBlur={onClickSideNavExpand}>
      <SideNavItems>
        <SideNavMenu renderIcon={InventoryManagement} title="Suprimentos" large>
          <SideNavMenuItem isActive={location.pathname === "/supplies/list"} href="/supplies/list">
            Lista
          </SideNavMenuItem>
          <SideNavMenuItem isActive={location.pathname === "/supplies/new"} href="/supplies/new">
            Adicionar
          </SideNavMenuItem>
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  );
};

export default ShellLeftPanel;
