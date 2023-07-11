import React, { useState } from "react";
import {
  Button,
  ButtonSet,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderPanel,
  Heading,
  Section,
  Stack,
  SwitcherDivider,
} from "@carbon/react";
import { Settings } from "@carbon/react/icons";
import styles from "./QuickSettings.module.scss";
import LayoutIcon from "../../assets/icons/LayoutIcon";
import { useBoundStore } from "../../store/useBoundStore";

const QuickSettings = ({ isSettingsPanelExpanded }) => {
  const setThemeColor = useBoundStore(({ setThemeColor }) => setThemeColor);

  return (
    <>
      <HeaderPanel expanded={isSettingsPanelExpanded} aria-label="Custom Settings">
        <Stack aria-label="Color theme options" gap={5}>
          <Section level={5}>
            <Heading className={styles["heading-section-name"]}>Temas</Heading>
          </Section>
          <ButtonSet stacked className={styles["button-set"]}>
            <Button
              className={styles["btn-color-theme__g100"]}
              onClick={() => setThemeColor("g100")}>
              cinza100
              <LayoutIcon />
            </Button>
            <Button
              className={styles["btn-color-theme__g90"]}
              aria-label="g90 color theme"
              onClick={() => setThemeColor("g90")}>
              cinza90
              <LayoutIcon />
            </Button>
            <Button
              className={styles["btn-color-theme__g10"]}
              aria-label="g10 color theme"
              onClick={() => setThemeColor("g10")}>
              cinza10
              <LayoutIcon />
            </Button>
            <Button
              className={styles["btn-color-theme__white"]}
              aria-label="white color theme"
              onClick={() => setThemeColor("white")}>
              branco
              <LayoutIcon />
            </Button>
          </ButtonSet>
          <SwitcherDivider />
        </Stack>
      </HeaderPanel>
    </>
  );
};

export default QuickSettings;
