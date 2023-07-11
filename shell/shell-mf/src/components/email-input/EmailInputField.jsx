import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Section,
  Heading,
  FormLabel,
  TextInput,
  Button,
  Checkbox,
  SideNavDivider,
} from "@carbon/react";
import { ArrowRight } from "@carbon/react/icons";
import Google from "../../assets/icons/Google";
import Outlook from "../../assets/icons/Outlook";
import styles from "./EmailInput.module.scss";
import { validateEmail } from "../../utils/validateEmail";

const EmailInput = (props) => {
  const { emailValue, handleChangeEmail, handleClick } = props;
  const [state, setState] = useState({
    wasEmailFieldTouched: false,
    isEnteredEmailValid: false,
  });

  const handleFocus = () => {
    setState({
      ...state,
      wasEmailFieldTouched: true,
      isEnteredEmailValid: true,
    });
  };
  const handleBlur = () => {
    if (!emailValue) {
      setState({
        ...state,
        isEnteredEmailValid: false,
      });
    } else if (validateEmail(emailValue)) {
      setState({
        ...state,
        isEnteredEmailValid: true,
      });
    } else {
      setState({
        ...state,
        isEnteredEmailValid: false,
      });
    }
  };
  const isEnteredEmailInValid = !state.isEnteredEmailValid && state.wasEmailFieldTouched;

  return (
    <>
      <Section level={6}>
        <Heading className={styles["heading-font"]}>
          Não tem uma conta? Solicite uma <Link to={"#"}>Aqui</Link>
        </Heading>
      </Section>
      <SideNavDivider className={styles["sidenav-divider"]} />
      <Section>
        <FormLabel htmlFor="email" className={styles["input-label"]}>
          Email<Link to={"#"}>Esqueceu seu email?</Link>
        </FormLabel>
      </Section>
      <TextInput
        id="email"
        name="email"
        labelText=""
        placeholder="Entre com o seu email"
        invalid={isEnteredEmailInValid}
        invalidText="Coloque um email válido!"
        size={"lg"}
        type="text"
        onChange={handleChangeEmail}
        helperText="Ex: example@example.com.br"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Button
        className={styles["form-button"]}
        size={"lg"}
        renderIcon={ArrowRight}
        type="button"
        onClick={handleClick}>
        Continue
      </Button>
      <Checkbox
        className={styles["remember-me-checkbox"]}
        labelText={"Lembrar-me"}
        id="remember-me-checkbox"
      />
      <SideNavDivider className={styles["sidenav-divider"]} />
      <Section level={6}>
        <Heading className={styles["heading-font"]}>Logins Alternativos</Heading>
      </Section>
      <Button renderIcon={Google} className={styles["form-button"]} kind={"tertiary"}>
        Login com Google
      </Button>
      <Button renderIcon={Outlook} className={styles["form-button"]} kind={"tertiary"}>
        Login com Outlook
      </Button>
      <SideNavDivider className={styles["sidenav-divider"]} />
      <Section level={6}>
        <Heading className={styles["heading-font"]}>
          Necessita de Ajuda? <Link to={"#"}>Contate-nos</Link>
        </Heading>
      </Section>
    </>
  );
};

export default EmailInput;
