import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginPanelStore } from "../../store/useLoginPanelStore";
import {
  Button,
  Checkbox,
  FormLabel,
  Heading,
  Section,
  SideNavDivider,
  TextInput,
} from "@carbon/react";
import { ArrowRight } from "@carbon/react/icons";
import Google from "../../assets/icons/Google";
import Outlook from "../../assets/icons/Outlook";
import styles from "./EmailInputField.module.scss";
import { validateEmail } from "../../utils/validateEmail";

const EmailInputField = () => {
  const [googleOauthUrl, setGoogleOauthUrl] = useState("");
  const setIsEmailInputInvalid = useLoginPanelStore(
    ({ setIsEmailInputInvalid }) => setIsEmailInputInvalid,
  );
  const [emailInputState, setEmailInputState] = useState({
    wasEmailFieldTouched: false,
    isEnteredEmailValid: false,
  });
  const emailValue = useLoginPanelStore(({ emailValue }) => emailValue);
  const setEmailValue = useLoginPanelStore(({ setEmailValue }) => setEmailValue);

  useEffect(() => {
    const loadOauthUrl = async () => {
      try {
        const response = await fetch("http://localhost:4007/auth/google/url", {
          method: "GET",
        });
        const { url } = await response.json();
        setGoogleOauthUrl(url);
      } catch (error) {
        console.log(error);
      }
    };
    loadOauthUrl();
  }, []);

  const handleChangeEmail = (event) => {
    setEmailValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    const isEmailValid = validateEmail(emailValue);
    if (event.key === "Enter") {
      event.preventDefault();
      setEmailInputState({
        ...emailInputState,
        isEnteredEmailValid: isEmailValid,
      });
      setIsEmailInputInvalid(!isEmailValid);
    } else {
      setEmailInputState({ ...emailInputState, isEnteredEmailValid: true });
    }
  };

  const handleClick = () => {
    const isEmailValid = validateEmail(emailValue);
    setIsEmailInputInvalid(!isEmailValid);
    if (!isEmailValid) {
      setEmailInputState({
        ...emailInputState,
        wasEmailFieldTouched: true,
        isEnteredEmailValid: false,
      });
    }
  };

  const handleFocus = () => {
    setEmailInputState({
      ...emailInputState,
      wasEmailFieldTouched: true,
      isEnteredEmailValid: true,
    });
  };
  const handleBlur = (event) => {
    setEmailInputState({
      ...emailInputState,
      isEnteredEmailValid: validateEmail(emailValue),
    });
  };
  const isEnteredEmailInValid =
    !emailInputState.isEnteredEmailValid && emailInputState.wasEmailFieldTouched;

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
        invalidText="Coloque um email válido!" // TODO: implementar feedbacks de acordo com o erro
        size={"lg"}
        type="text"
        helperText="Ex: example@example.com.br"
        onChange={handleChangeEmail}
        onKeyPress={handleKeyPress}
        onFocus={handleFocus}
        onBlur={handleBlur}
        autoFocus={false}
      />
      <Button
        className={styles["form-button"]}
        size={"lg"}
        renderIcon={ArrowRight}
        type="button"
        onClick={handleClick}>
        Continuar
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
      <Button
        renderIcon={Google}
        className={styles["form-button"]}
        kind={"tertiary"}
        disabled={!googleOauthUrl}
        onClick={() => {
          window.location.href = googleOauthUrl;
        }}>
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

export default EmailInputField;
