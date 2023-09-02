import React, { useState } from "react";
import {
  Header,
  HeaderContainer,
  HeaderName,
  SkipToContent,
  HeaderMenuButton,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  ButtonSet,
  Theme,
  useTheme,
} from "@carbon/react";
import {
  Search,
  InventoryManagement,
  UserAvatar,
  Notification,
  Settings,
} from "@carbon/react/icons";
import QuickSettingsPanel from "../quick-settings-panel/QuickSettingsPanel";
import styles from "./Layout.module.scss";
import { Outlet, useLocation } from "react-router-dom";
import ProfilePanel from "../profile-panel/ProfilePanel";
import LeftSideNav from "../left-sidenav/LeftSideNav";
import LoginPanel from "../login-panel/LoginPanel";

function Layout() {
  const [isSettingsPanelExpanded, toggleIsSettingsPanelExpanded] = useState(false);
  const [isAccountPanelExpanded, toggleIsAccountPanelExpanded] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();
  const onClickSettingsPanelExpand = () => {
    toggleIsSettingsPanelExpanded(!isSettingsPanelExpanded);
  };
  const onClickAccountMenuExpand = () => {
    toggleIsAccountPanelExpanded(!isAccountPanelExpanded);
  };

  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <>
          <Header aria-label="Application name">
            {location.pathname !== "/app/login" ? (
              <HeaderMenuButton
                aria-label={isSideNavExpanded ? "Close menu" : "Open menu"}
                isCollapsible
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
                aria-expanded={isSideNavExpanded}
              />
            ) : null}
            <HeaderName href="/" prefix="Hematologia">
              [Unicamp]
            </HeaderName>
            <HeaderGlobalBar>
              {location.pathname !== "/app/login" ? (
                <>
                  <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                    <Search size={20} />
                  </HeaderGlobalAction>
                  <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
                    <Notification size={20} />
                  </HeaderGlobalAction>
                </>
              ) : null}
              <HeaderGlobalAction
                aria-label="Quick Settings"
                isActive={isSettingsPanelExpanded}
                onClick={onClickSettingsPanelExpand}
                tooltipAlignment="start">
                <Settings size={20} />
              </HeaderGlobalAction>
              {location.pathname !== "/app/login" ? (
                <HeaderGlobalAction
                  aria-label="App Switcher"
                  onClick={onClickAccountMenuExpand}
                  tooltipAlignment="end">
                  <UserAvatar size={20} />
                </HeaderGlobalAction>
              ) : null}
            </HeaderGlobalBar>
            {location.pathname !== "/app/login" ? (
              <LeftSideNav
                isSideNavExpanded={isSideNavExpanded}
                onClickSideNavExpand={onClickSideNavExpand}
              />
            ) : (
              <LoginPanel />
            )}
            <QuickSettingsPanel isSettingsPanelExpanded={isSettingsPanelExpanded} />
            <ProfilePanel isAccountPanelExpanded={isAccountPanelExpanded} />
          </Header>
          {location.pathname !== "/app/login" ? (
            <Theme
              theme={theme}
              as="main"
              className={styles["main-content"]}
              style={{ width: `calc(100% - ${isSideNavExpanded ? "16rem" : "3rem"})` }}>
              <Outlet />
            </Theme>
          ) : (
            <Outlet />
          )}
        </>
      )}
    />
  );
}

export default Layout;
