import React from "react";
import styles from "./PersonalInformationForm.module.scss";
import TextInput from "../text-input/TextInput";
import FormHeader from "../form-header/FormHeader";
import FormBottom from "../form-bottom/FormBottom";
import DateInput from "../date-input/DateInput";

const PersonalInformationForm = () => {
  return (
    <form className={styles["form"]}>
      <FormHeader />
      <div className={styles["form__row"]}>
        <TextInput label={"Nome"} />
        <TextInput label={"Sobrenome"} />
        <TextInput label={"Email"} />
        <DateInput />
        <TextInput label={""} />
        <TextInput label={""} />
      </div>
      <FormHeader />
      <div className={styles["form__row"]}>
        <TextInput label={"Nome"} />
        <TextInput label={"Nome"} />
        <TextInput label={"Nome"} />
        <TextInput label={"Nome"} />
        <TextInput label={"Nome"} />
        <TextInput label={"Nome"} />
      </div>
      <FormBottom />
    </form>
  );
};

export default PersonalInformationForm;
