import React, { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";

const SelectPeople = () => {
  const { feedbackByName } = useContext(FeedbackContext);

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
        <option value="start" style={{ textAlign: "center" }}>
          Select Therapist
        </option>
        <option value="Gosho" style={{ textAlign: "center" }}>
          Gosho
        </option>
        <option value="Tosho" style={{ textAlign: "center" }}>
          Tosho
        </option>
        <option value="Pesho" style={{ textAlign: "center" }}>
          Pesho
        </option>
        <option value="Tomi" style={{ textAlign: "center" }}>
          Tomi
        </option>
      </select>
      {/* <button style={{borderRadius: '5px'}} type="button" onClick={onClick}>Submit</button> */}
    </>
  );
};

export default SelectPeople;
