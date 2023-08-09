import styles from "./App.module.scss";
import {
  Header,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  HeaderPanel,
  Section,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Checkbox,
  Button,
  TextInput,
} from "@carbon/react";
import { Search, Menu } from "@carbon/react/icons";

function App() {
  return (
    <>
      <Header aria-label="IBM Platform Name">
        <HeaderName href="#" prefix="Hematology">
          [Unicamp]
        </HeaderName>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Search" onClick={() => {}}>
            <Search size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="App Switcher"
            onClick={() => {}}
            tooltipAlignment="end"
          >
            <Menu size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
        {/*<HeaderPanel  />*/}
      </Header>
      <div className={styles["header-image-container"]}>
        <div className={styles["header-tabs"]}>
          <Tabs>
            <TabPanels>
              <TabPanel className={styles["header-tabs-panel"]}>
                <div className={styles["header-image-gradient"]}>
                  <Section level={1}>
                    <Heading className={styles["header-image-section-title"]}>
                      Analyze
                    </Heading>
                  </Section>
                </div>
                <img
                  className={styles["header-image"]}
                  src="../assets/images/AdobeStock_274573862.jpeg"
                  alt=""
                />
              </TabPanel>
              <TabPanel className={styles["header-tabs-panel"]}>
                <div
                  className={styles["header-image-gradient"]}
                  style={{
                    background:
                      "linear-gradient(rgba(24, 55, 158, 0), rgba(24, 55, 158,0.25), rgba(24,55,158,1))",
                  }}
                >
                  <Section level={1}>
                    <Heading className={styles["header-image-section-title"]}>
                      Analyze
                    </Heading>
                  </Section>
                </div>
                <img
                  className={styles["header-image"]}
                  src="../assets/images/AdobeStock_259850028.jpeg"
                  alt=""
                />
              </TabPanel>
              <TabPanel className={styles["header-tabs-panel"]}>
                <div className={styles["header-image-gradient"]}>
                  <Section level={1}>
                    <Heading className={styles["header-image-section-title"]}>
                      Analyze
                    </Heading>
                  </Section>
                </div>
                <img
                  className={styles["header-image"]}
                  src="../assets/images/AdobeStock_274573862.jpeg"
                  alt=""
                />
              </TabPanel>
              <TabPanel className={styles["header-tabs-panel"]}>
                <div
                  className={styles["header-image-gradient"]}
                  style={{
                    background:
                      "linear-gradient(rgba(24, 55, 158, 0), rgba(24, 55, 158,0.25), rgba(24,55,158,1))",
                  }}
                >
                  <Section level={1}>
                    <Heading className={styles["header-image-section-title"]}>
                      Analyze
                    </Heading>
                  </Section>
                </div>
                <img
                  className={styles["header-image"]}
                  src="../assets/images/AdobeStock_259850028.jpeg"
                  alt=""
                />
              </TabPanel>
              <TabPanel className={styles["header-tabs-panel"]}>
                <div className={styles["header-image-gradient"]}>
                  <Section level={1}>
                    <Heading className={styles["header-image-section-title"]}>
                      Analyze
                    </Heading>
                  </Section>
                </div>
                <img
                  className={styles["header-image"]}
                  src="../assets/images/AdobeStock_274573862.jpeg"
                  alt=""
                />
              </TabPanel>
              <TabPanel className={styles["header-tabs-panel"]}>
                <div
                  className={styles["header-image-gradient"]}
                  style={{
                    background:
                      "linear-gradient(rgba(24, 55, 158, 0), rgba(24, 55, 158,0.25), rgba(24,55,158,1))",
                  }}
                >
                  <Section level={1}>
                    <Heading className={styles["header-image-section-title"]}>
                      Analyze
                    </Heading>
                  </Section>
                </div>
                <img
                  className={styles["header-image"]}
                  src="../assets/images/AdobeStock_259850028.jpeg"
                  alt=""
                />
              </TabPanel>
              <TabPanel className={styles["header-tabs-panel"]}>
                <div className={styles["header-image-gradient"]}>
                  <Section level={1}>
                    <Heading className={styles["header-image-section-title"]}>
                      Analyze
                    </Heading>
                  </Section>
                </div>
                <img
                  className={styles["header-image"]}
                  src="../assets/images/AdobeStock_274573862.jpeg"
                  alt=""
                />
              </TabPanel>
              <TabPanel className={styles["header-tabs-panel"]}>
                <div
                  className={styles["header-image-gradient"]}
                  style={{
                    background:
                      "linear-gradient(rgba(24, 55, 158, 0), rgba(24, 55, 158,0.25), rgba(24,55,158,1))",
                  }}
                >
                  <Section level={1}>
                    <Heading className={styles["header-image-section-title"]}>
                      Analyze
                    </Heading>
                  </Section>
                </div>
                <img
                  className={styles["header-image"]}
                  src="../assets/images/AdobeStock_259850028.jpeg"
                  alt=""
                />
              </TabPanel>
              <TabPanel className={styles["header-tabs-panel"]}>
                <div className={styles["header-image-gradient"]}>
                  <Section level={1}>
                    <Heading className={styles["header-image-section-title"]}>
                      Analyze
                    </Heading>
                  </Section>
                </div>
                <img
                  className={styles["header-image"]}
                  src="../assets/images/AdobeStock_274573862.jpeg"
                  alt=""
                />
              </TabPanel>
              <TabPanel className={styles["header-tabs-panel"]}>
                <div
                  className={styles["header-image-gradient"]}
                  style={{
                    background:
                      "linear-gradient(rgba(24, 55, 158, 0), rgba(24, 55, 158,0.25), rgba(24,55,158,1))",
                  }}
                >
                  <Section level={1}>
                    <Heading className={styles["header-image-section-title"]}>
                      Analyze
                    </Heading>
                  </Section>
                </div>
                <img
                  className={styles["header-image"]}
                  src="../assets/images/AdobeStock_259850028.jpeg"
                  alt=""
                />
              </TabPanel>
            </TabPanels>
            <TabList aria-label="List of tabs">
              <Tab className={styles["header-tabs-item"]}>Tab label 1</Tab>
              <Tab className={styles["header-tabs-item"]}>Tab label 2</Tab>
              <Tab className={styles["header-tabs-item"]}>Tab label 3</Tab>
              <Tab className={styles["header-tabs-item"]}>Tab label 4</Tab>
              <Tab className={styles["header-tabs-item"]}>Tab label 5</Tab>
              <Tab className={styles["header-tabs-item"]}>Tab label 6</Tab>
              <Tab className={styles["header-tabs-item"]}>Tab label 7</Tab>
              <Tab className={styles["header-tabs-item"]}>Tab label 8</Tab>
              <Tab className={styles["header-tabs-item"]}>Tab label 9</Tab>
              <Tab className={styles["header-tabs-item"]}>Tab label 10</Tab>
            </TabList>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default App;
