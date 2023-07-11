import React from "react";
import { Button, FormLabel, Heading, Link, Section, PasswordInput } from "@carbon/react";
import { ArrowRight } from "@carbon/react/icons";
import styles from "./PasswordInput.module.scss";

const PasswordInputField = (props) => {
  const { handleChangePassword } = props;
  return (
    <>
      <Section level={6}>
        <Heading>
          Logando como saymonfelipe@hotmail.com <Link href={"#"}>Não é você?</Link>
        </Heading>
      </Section>
      <Section>
        <FormLabel htmlFor="password" className={styles["input-label"]}>
          Password<Link href={"#"}>Esqueceu seu password?</Link>
        </FormLabel>
      </Section>
      <PasswordInput
        id="password"
        name="password"
        labelText=""
        invalid={false}
        invalidText="Credenciais incorretas!"
        placeholder={"Entre com o seu password"}
        size={"lg"}
        type="text"
        onChange={handleChangePassword}
      />
      <Button className={styles["form-button"]} size={"lg"} renderIcon={ArrowRight} type="submit">
        Log in
      </Button>
    </>
  );
};

export default PasswordInputField;
