import React from "react";
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
import styles from "./EmailInputForm.module.scss";
const EmailInputForm = (props) => {
  const { isEnteredEmailInvalid, handleOnChangeEmail, handleBlur, handleOnClick } = props;
  return (
    <>
      <Section level={6}>
        <Heading>
          Não tem uma conta? Solicite uma <Link to={"#"}>Aqui</Link>
        </Heading>
      </Section>
      <SideNavDivider className={styles["sidenav-divider"]} />
      <Section>
        <FormLabel className={styles["input-label"]}>
          Email<Link to={"#"}>Esqueceu seu email?</Link>
        </FormLabel>
      </Section>
      <TextInput
        id="email"
        name="email"
        labelText=""
        placeholder="Entre com o seu email"
        invalid={isEnteredEmailInvalid}
        invalidText="Coloque um email válido!"
        size={"lg"}
        type="text"
        onChange={handleOnChangeEmail}
        helperText="Ex: exemplo@exemplo.com.br"
        onBlur={handleBlur}
      />
      <Button
        className={styles["form-button"]}
        size={"lg"}
        renderIcon={ArrowRight}
        type="button"
        onClick={handleOnClick}>
        Continue
      </Button>
      <Checkbox
        className={styles["remember-me-checkbox"]}
        labelText={"Lembrar-me"}
        id="remember-me-checkbox"
      />
      <SideNavDivider className={styles["sidenav-divider"]} />
      <Section level={6}>
        <Heading>Logins Alternativos</Heading>
      </Section>
      <Button renderIcon={Google} className={styles["form-button"]} kind={"tertiary"}>
        Login com Google
      </Button>
      <Button renderIcon={Outlook} className={styles["form-button"]} kind={"tertiary"}>
        Login com Outlook
      </Button>
      <SideNavDivider className={styles["sidenav-divider"]} />
      <Section level={6}>
        <Heading>
          Necessita de Ajuda? <Link to={"#"}>Contate-nos</Link>
        </Heading>
      </Section>
    </>
  );
};

export default EmailInputForm;
