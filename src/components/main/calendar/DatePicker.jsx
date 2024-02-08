import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import style from "./calendare.module.scss";

const CustomCalendar = () => {
  return (
    <div className={style.customCalendar}>
      <Calendar
        formatMonthYear={(locale, date) => (
          <div className={style.customMonthYear}>
            <span>{date.toLocaleDateString(locale, { month: "long" })}</span>
            <span>{date.getFullYear()}</span>
          </div>
        )}
      />
    </div>
  );
};

export default CustomCalendar;
