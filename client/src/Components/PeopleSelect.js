import React, { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";
// import { therapiests } from "./employees/employees";

const SelectPeople = () => {
  const { feedbackByName, employees, addedName } = useContext(FeedbackContext);

  const onOptionChangeHandler = (e) => {
    let currentName = e.target.value;
    let text = e.target.options[e.target.selectedIndex].text
    addedName(text);
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
          row.check === true ?
          <option value={row.name} style={{ textAlign: "center" }}>{row.title}</option>
          : null
        ))}
      </select>
    </>
  );
};

export default SelectPeople;
