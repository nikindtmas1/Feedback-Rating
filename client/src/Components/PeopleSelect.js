import React, { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";
// import { therapiests } from "./employees/employees";

const SelectPeople = () => {
  const { feedbackByName, employees } = useContext(FeedbackContext);

  const onOptionChangeHandler = (e) => {
    let currentName = e.target.value;
    feedbackByName(currentName);
  };

  return (
    <>
      <select
        onChange={onOptionChangeHandler}
        style={{
          width: 140,
          color: "blue",
          borderRadius: "10px",
          padding: "3px",
        }}
      >
          <option style={{ textAlign: "center" }} value='start'>Select Therapist</option>
        {employees.map((row) => (
          <option value={row.name} style={{ textAlign: "center" }}>{row.title}</option>
        ))}
      </select>
    </>
  );
};

export default SelectPeople;
