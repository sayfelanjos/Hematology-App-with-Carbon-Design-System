import React from "react";
import styles from "./NewSupply.module.scss";
import {
  Form,
  FormGroup,
  Stack,
  TextInput,
  Button,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  ButtonSet,
} from "@carbon/react";

function NewSupply() {
  return (
    <>
      <Heading>Novo Suprimento</Heading>
      <br />
      <br />
      <Form className={styles["form"]}>
        <Stack>
          <Tabs>
            <TabList aria-label="List of tabs">
              <Tab>Geral</Tab>
              <Tab>Características</Tab>
              <Tab>Estoque</Tab>
              <Tab>Fornecedor</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <FormGroup className={styles["form-group"]} legendText="">
                  <TextInput id="Name" labelText="Nome" />
                  <TextInput id="Code" labelText="Código(SKU)" />
                </FormGroup>
                <FormGroup className={styles["form-group"]} legendText="">
                  <TextInput id="one" labelText="First Name" />
                  <TextInput id="two" labelText="Last Name" />
                </FormGroup>
                <FormGroup className={styles["form-group"]} legendText="">
                  <TextInput id="one" labelText="First Name" />
                  <TextInput id="two" labelText="Last Name" />
                </FormGroup>
              </TabPanel>
              <TabPanel>
                <FormGroup className={styles["form-group"]} legendText="">
                  <TextInput id="one" labelText="First Name" />
                  <TextInput id="two" labelText="Last Name" />
                </FormGroup>
                <FormGroup className={styles["form-group"]} legendText="">
                  <TextInput id="one" labelText="First Name" />
                  <TextInput id="two" labelText="Last Name" />
                </FormGroup>
                <FormGroup className={styles["form-group"]} legendText="">
                  <TextInput id="one" labelText="First Name" />
                  <TextInput id="two" labelText="Last Name" />
                </FormGroup>
              </TabPanel>
              <TabPanel>
                <FormGroup className={styles["form-group"]} legendText="">
                  <TextInput id="one" labelText="First Name" />
                  <TextInput id="two" labelText="Last Name" />
                </FormGroup>
                <FormGroup className={styles["form-group"]} legendText="">
                  <TextInput id="one" labelText="First Name" />
                  <TextInput id="two" labelText="Last Name" />
                </FormGroup>
                <FormGroup className={styles["form-group"]} legendText="">
                  <TextInput id="one" labelText="First Name" />
                  <TextInput id="two" labelText="Last Name" />
                </FormGroup>
              </TabPanel>
              <TabPanel>
                <FormGroup className={styles["form-group"]} legendText="">
                  <TextInput id="one" labelText="First Name" />
                  <TextInput id="two" labelText="Last Name" />
                </FormGroup>
                <FormGroup className={styles["form-group"]} legendText="">
                  <TextInput id="one" labelText="First Name" />
                  <TextInput id="two" labelText="Last Name" />
                </FormGroup>
                <FormGroup className={styles["form-group"]} legendText="">
                  <TextInput id="one" labelText="First Name" />
                  <TextInput id="two" labelText="Last Name" />
                </FormGroup>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <ButtonSet className={styles["button-set"]}>
            <Button className={styles["submit-btn"]} kind="secondary">
              Cancelar
            </Button>
            <Button className={styles["submit-btn"]} kind="primary">
              Salvar
            </Button>
          </ButtonSet>
        </Stack>
      </Form>
    </>
  );
}

export default NewSupply;
