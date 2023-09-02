import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPanel.module.scss";
import { Heading, Section, SideNav, Stack, Form } from "@carbon/react";
import EmailInputField from "../email-input/EmailInputField";
import PasswordInput from "../password-input/PasswordInputField";
import { useLoginPanelStore } from "../../store/useLoginPanelStore";
import { useToken } from "../../hooks/useToken";

const LoginPanel = () => {
  const [, setToken] = useToken();
  const navigate = useNavigate();
  const emailValue = useLoginPanelStore(({ emailValue }) => emailValue);
  const passwordValue = useLoginPanelStore(({ passwordValue }) => passwordValue);
  const isEmailInputInvalid = useLoginPanelStore(({ isEmailInputInvalid }) => isEmailInputInvalid);
  const setIsPasswordFieldValid = useLoginPanelStore(
    ({ setIsPasswordFieldValid }) => setIsPasswordFieldValid,
  );
  const setWasPasswordFieldTouched = useLoginPanelStore(
    ({ setWasPasswordFieldTouched }) => setWasPasswordFieldTouched,
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (passwordValue) {
      const credentials = {
        email: emailValue,
        password: passwordValue,
      };
      const response = await fetch(
        `http://${process.env.REACT_APP_API_DOMAIN}:${process.env.REACT_APP_API_PORT}/auth/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        },
      );
      if (!response.ok) {
        throw "Response isn't ok!";
        // TODO: need to show a feedback on LoginPanel if get an error
      }
      const { access_token } = await response.json();
      setToken(access_token);
      navigate("/app");
    } else {
      setIsPasswordFieldValid(false);
      setWasPasswordFieldTouched(true);
    }
    // TODO: need to clean user and password variables after send request
  };

  return (
    <SideNav
      className={styles["side-nav"]}
      isFixedNav
      expanded={true}
      isChildOfHeader={true}
      aria-label="Side navigation">
      <Form className={styles["form-container"]} method="post" onSubmit={handleSubmit}>
        <Stack gap={4}>
          <Section level={3}>
            <Heading className={styles["heading-font"]}>Login</Heading>
          </Section>
          {isEmailInputInvalid && <EmailInputField />}
          {!isEmailInputInvalid && <PasswordInput />}
        </Stack>
      </Form>
    </SideNav>
  );
};
export default LoginPanel;
