import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import {
  HeaderContainer,
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
  SkipToContent,
  Theme,
  useTheme,
} from "@carbon/react";
import { InventoryManagement, Switcher, Notification, Search } from "@carbon/react/icons";

const Layout = () => {
  const { theme } = useTheme();
  const location = useLocation();
  return (
    <>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="IBM Platform Name">
              <SkipToContent />
              <HeaderMenuButton
                aria-label={isSideNavExpanded ? "Close menu" : "Open menu"}
                isCollapsible
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
                aria-expanded={isSideNavExpanded}
              />
              <HeaderName href="#" prefix="Hematologia">
                [Unicamp]
              </HeaderName>
              <HeaderGlobalBar>
                <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
                  <Search size={20} />
                </HeaderGlobalAction>
                <HeaderGlobalAction aria-label="Notifications" onClick={() => {}}>
                  <Notification size={20} />
                </HeaderGlobalAction>
                <HeaderGlobalAction
                  aria-label="App Switcher"
                  onClick={() => {}}
                  tooltipAlignment="end">
                  <Switcher size={20} />
                </HeaderGlobalAction>
              </HeaderGlobalBar>
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
                    <SideNavMenuItem
                      isActive={location.current.pathname === "/supplies/list"}
                      href="/supplies/list">
                      Lista
                    </SideNavMenuItem>
                    <SideNavMenuItem
                      isActive={location.current.pathname === "/supplies/new"}
                      href="/supplies/new">
                      Adicionar
                    </SideNavMenuItem>
                  </SideNavMenu>
                </SideNavItems>
              </SideNav>
            </Header>
            <Theme
              theme={theme}
              as="main"
              className={styles["main-content"]}
              style={{ width: `calc(100% - ${isSideNavExpanded ? "16rem" : "3rem"})` }}>
              <Outlet />
            </Theme>
          </>
        )}
      />
    </>
  );
};

export default Layout;
