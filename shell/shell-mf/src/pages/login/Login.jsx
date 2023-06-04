import React, { useState } from "react";
import styles from "./Login.module.scss";
import { TextInput, Link, Button, Checkbox, FormLabel } from "@carbon/react";
import { ArrowRight } from "@carbon/react/icons";
import backgroundImage from "../../assets/images/AdobeStock_544458009.jpeg";

function LoginPage() {
  return (
      <div className={styles["login-page__container"]}>
        <div className={styles["login-page__background"]}>
          <img src={backgroundImage} alt="Login Page Image Background" />
        </div>
        <form>
          <h3>Login</h3>
          <h6>
            Não tem uma conta? Solicite uma <Link href={"#"}>Aqui</Link>
          </h6>
          <span>
          <FormLabel>Email</FormLabel>
          <Link
              className={styles["login-form__forgot-password-link"]}
              href={"#"}
          >
            Esqueceu seu email?
          </Link>
        </span>
          <TextInput
              id={styles["login-form__text-input"]}
              // labelText={"Email"}
              invalidText="Coloque um email válido!"
              placeholder={"Entre com o seu email"}
              size={"lg"}
          />
          <div>
            <Button
                className={styles["login-form__button"]}
                size={"lg"}
                renderIcon={ArrowRight}
            >
              Continue
            </Button>
          </div>
          <Checkbox
              className={styles["login-form__remember-me-checkbox"]}
              labelText={"Lembrar-me"}
              id="remember-me-checkbox"
          />
          <h6>Logins Alternativos</h6>
          <div className={styles["login-form__button-box"]}>
            <Button className={styles["login-form__button"]} kind={"tertiary"}>
              Login com Google
            </Button>
          </div>
          <div className={styles["login-form__button-box"]}>
            <Button className={styles["login-form__button"]} kind={"tertiary"}>
              Login com Outlook
            </Button>
          </div>
          <h6>
            Necessita de Ajuda? <Link href={"#"}>Contate-nos</Link>
          </h6>
        </form>
      </div>
  );
}

export default LoginPage;