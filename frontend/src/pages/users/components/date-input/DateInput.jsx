import React from "react";
import styles from "./DateInput.module.scss";

function DateInput() {
  const days = Array.from({ length: 31 }, (value, index) => 1 + index);
  console.log(days);
  return (
    <div className={styles["date-input"]}>
      <div className={styles["date-input__month"]}>
        <label htmlFor="day" className={styles["date-input__label"]}>
          Day of Birth
        </label>
        <select className={styles["date-input__month-widget"]}>
          <option value="">January</option>
          <option value="dog">February</option>
          <option value="cat">March</option>
          <option value="hamster">April</option>
          <option value="parrot">May</option>
          <option value="spider">June</option>
          <option value="goldfish">July</option>
          <option value="goldfish">August</option>
          <option value="goldfish">September</option>
          <option value="goldfish">October</option>
          <option value="goldfish">November</option>
          <option value="goldfish">December</option>
        </select>
      </div>
      <div className={styles["date-input__day"]}>
        <select className={styles["date-input__day-widget"]}>
          {days.map((day) => (
            <option key={+day} value="">
              {day}
            </option>
          ))}
        </select>
      </div>
      <div className={styles["date-input__year"]}>
        <select className={styles["date-input__year-widget"]}></select>
      </div>
    </div>
  );
}

export default DateInput;
