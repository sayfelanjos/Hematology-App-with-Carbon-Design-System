import React, { useState } from "react";
import {
  Button,
  FormLabel,
  Heading,
  Link,
  Section,
  PasswordInput,
  SideNavDivider,
} from "@carbon/react";
import { ArrowRight } from "@carbon/react/icons";
import { validatePassword } from "../../utils/validatePassword";
import styles from "./PasswordInputField.module.scss";
import { useLoginPanelStore } from "../../store/useLoginPanelStore";
import { validateEmail } from "../../utils/validateEmail";

const PasswordInputField = () => {
  const passwordValue = useLoginPanelStore(({ passwordValue }) => passwordValue);
  const setPasswordValue = useLoginPanelStore(({ setPasswordValue }) => setPasswordValue);
  const wasPasswordFieldTouched = useLoginPanelStore(
    ({ wasPasswordFieldTouched }) => wasPasswordFieldTouched,
  );
  const isPasswordFieldValid = useLoginPanelStore(
    ({ isPasswordFieldValid }) => isPasswordFieldValid,
  );
  const setWasPasswordFieldTouched = useLoginPanelStore(
    ({ setWasPasswordFieldTouched }) => setWasPasswordFieldTouched,
  );
  const setIsPasswordFieldValid = useLoginPanelStore(
    ({ setIsPasswordFieldValid }) => setIsPasswordFieldValid,
  );

  const handleChangePassword = (event) => {
    setPasswordValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (validatePassword(passwordValue)) {
        setIsPasswordFieldValid(true);
      } else {
        event.preventDefault();
        setIsPasswordFieldValid(false);
      }
    } else {
      setIsPasswordFieldValid(true);
    }
  };
  const handleFocus = () => {
    setWasPasswordFieldTouched(true);
    setIsPasswordFieldValid(true);
  };

  const handleBlur = () => {
    setIsPasswordFieldValid(validatePassword(passwordValue));
  };

  const isPasswordFieldInValid = !isPasswordFieldValid && wasPasswordFieldTouched;

  return (
    <>
      <Section level={6}>
        <Heading className={styles["pwd-heading-font"]}>
          Logando como <u>saymonfelipe@hotmail.com</u>
          <br />
          <br />
          <Link href={"#"}>Não é você?</Link>
        </Heading>
      </Section>
      <SideNavDivider className={styles["sidenav-divider"]} />
      <Section>
        <FormLabel htmlFor="password" className={styles["input-label"]}>
          Password<Link href={"#"}>Esqueceu seu password?</Link>
        </FormLabel>
      </Section>
      <PasswordInput
        id="password"
        name="password"
        labelText=""
        invalid={isPasswordFieldInValid}
        invalidText="Campo password é obrigatório!"
        placeholder={"Entre com o seu password"}
        size={"lg"}
        type="password"
        onKeyPress={handleKeyPress}
        onChange={handleChangePassword}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoFocus
      />
      <Button className={styles["form-button"]} size={"lg"} renderIcon={ArrowRight} type="submit">
        Entrar
      </Button>
    </>
  );
};

export default PasswordInputField;
