import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPanel.module.scss";
import { Heading, Section, SideNav, Stack, Form } from "@carbon/react";
import EmailInputForm from "../user-input-form/EmailInputForm";
import PasswordInputForm from "../password-input-form/PasswordInputForm";
import { loginPanelReducer } from "../../reducers/loginPanelReducer";
import { useToken } from "../../hooks/useToken";

const domain = process.env.NODE_ENV === "development" ? "http://localhost:4007" : ""; // TODO: need to put the production domain

// const validateEmail = (email) => {
//   if (!email) {
//     return false;
//   }
//   return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
// };

const initialLoginPanelState = {
  email: "",
  password: "",
  isLoading: false,
  isEmailInputValid: false,
  isPasswordInputValid: false,
  isEmailInputTouched: false,
};
const LoginPanel = () => {
  const [, setToken] = useToken();
  const navigate = useNavigate();
  const [loginPanelState, dispatchLoginPanelState] = useReducer(
    loginPanelReducer,
    initialLoginPanelState,
    undefined,
  );
  const handleOnChangeEmail = (event) => {
    dispatchLoginPanelState({ type: "CHANGE_EMAIL", enteredEmail: event.target.value });
  };

  const handleOnChangePassword = (event) => {
    dispatchLoginPanelState({ type: "CHANGE_PASSWORD", enteredPassword: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatchLoginPanelState({ type: "SET_IF_INPUT_WAS_TOUCHED", setIsInputTouched: true });
    dispatchLoginPanelState({ type: "IS_LOADING", setIsLoading: true });

    if (loginPanelState.email.trim() !== "") {
      dispatchLoginPanelState({ type: "SET_EMAIL_VALIDATION", setIsEmailInputValid: true });
    } else {
      dispatchLoginPanelState({ type: "SET_EMAIL_VALIDATION", setIsEmailInputValid: false });
    }
    const credentials = {
      email: loginPanelState.email,
      password: loginPanelState.password,
    };
    const response = await fetch(`${domain}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw "Response isn't ok!";
    }
    dispatchLoginPanelState({ type: "IS_LOADING", setIsLoading: false });
    const { access_token } = await response.json();
    setToken(access_token);
    navigate("/app");
  };

  const handleOnClick = () => {
    dispatchLoginPanelState({ type: "SET_IF_INPUT_WAS_TOUCHED", setIsInputTouched: true });

    if (loginPanelState.email.trim() !== "") {
      dispatchLoginPanelState({ type: "SET_EMAIL_VALIDATION", setIsEmailInputValid: true });
    } else {
      dispatchLoginPanelState({ type: "SET_EMAIL_VALIDATION", setIsEmailInputValid: false });
    }
  };

  const handleBlur = () => {
    dispatchLoginPanelState({ type: "SET_IF_INPUT_WAS_TOUCHED", setIsInputTouched: true });
    if (loginPanelState.email.trim() !== "") {
      dispatchLoginPanelState({ type: "SET_EMAIL_VALIDATION", setIsEmailInputValid: true });
    }
  };

  const isEnteredEmailInvalid =
    loginPanelState.isEmailInputValid !== loginPanelState.isEmailInputTouched;
  const isEnteredEmailValid =
    loginPanelState.isEmailInputValid && loginPanelState.isEmailInputTouched;

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
            <Heading>Login</Heading>
          </Section>
          {!isEnteredEmailValid && (
            <EmailInputForm
              handleOnChangeEmail={handleOnChangeEmail}
              handleBlur={handleBlur}
              handleOnClick={handleOnClick}
              isEnteredEmailInvalid={isEnteredEmailInvalid}
            />
          )}
          {isEnteredEmailValid && (
            <PasswordInputForm
              handleOnChangePassword={handleOnChangePassword}
              isPasswordInputValid={loginPanelState.isPasswordInputValid}
            />
          )}
        </Stack>
      </Form>
    </SideNav>
  );
};
export default LoginPanel;
