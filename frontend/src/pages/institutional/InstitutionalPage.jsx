import React from "react";
import { Content, Header, HeaderContainer, HeaderName, SkipToContent } from "@carbon/react";
import styles from "./InstitutionalPage.module.scss";
import backgroundImage from "../../assets/images/AdobeStock_274573862.jpeg";

const InstitutionalPage = () => {
  return (
    <HeaderContainer
      render={() => (
        <>
          <Header aria-label="Hematologia Manage System">
            <SkipToContent />
            <HeaderName prefix="Hematologia">[HC-Unicamp]</HeaderName>
          </Header>
          <Content className={styles["main-content"]}>
            <img
              className={styles["background-img"]}
              src={backgroundImage}
              alt="LoginPage Page Image Background"
            />
          </Content>
        </>
      )}
    />
  );
};

export default InstitutionalPage;
