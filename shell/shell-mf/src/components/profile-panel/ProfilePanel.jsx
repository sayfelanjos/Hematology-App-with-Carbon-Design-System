import React from "react";
import { Switcher, SwitcherItem, HeaderPanel, SwitcherDivider } from "@carbon/react";

const AccountPanel = ({ isAccountPanelExpanded }) => {
  return (
    <HeaderPanel
      expanded={isAccountPanelExpanded}
      href="#switcher-button"
      aria-label="User profile panel">
      <Switcher aria-label="Switcher Container">
        <SwitcherItem aria-label="Link " href="#">
          Link
        </SwitcherItem>
        <SwitcherDivider />
        <SwitcherItem href="#" aria-label="Link ">
          Link
        </SwitcherItem>
        <SwitcherItem href="#" aria-label="Link ">
          Link
        </SwitcherItem>
        <SwitcherItem href="#" aria-label="Link ">
          Link
        </SwitcherItem>
        <SwitcherItem href="#" aria-label="Link ">
          Link
        </SwitcherItem>
        <SwitcherDivider />
        <SwitcherItem href="#" aria-label="Link ">
          Link
        </SwitcherItem>
      </Switcher>
    </HeaderPanel>
  );
};

export default AccountPanel;
