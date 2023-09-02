import React from "react";
import styles from "./PasswordForm.module.scss";
import TextInput from "../text-input/TextInput";
import FormHeader from "../form-header/FormHeader";
import FormBottom from "../form-bottom/FormBottom";

const PasswordForm = () => {
  return (
    <form className={styles["password-form"]}>
      <FormHeader />
      <div className={styles["password-form__row"]}>
        <TextInput />
        <TextInput />
        <TextInput />
      </div>
      <FormBottom />
    </form>
  );
};

export default PasswordForm;
