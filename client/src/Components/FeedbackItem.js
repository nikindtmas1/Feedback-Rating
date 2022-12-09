import React, { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import { FeedbackContext } from "../context/FeedbackContext";
import Card from "./shared/Card";

const FeedbackItem = ({ item }) => {
  const { removeFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button
        type="button"
        onClick={() => removeFeedback(item._id)}
        className="close"
      >
        <FaTimes color="red" />
      </button>
      <button type="button" onClick="" className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      <div className="name-text">{item.peopleName}</div>
      <div className="name-user">{item.userName}</div>
    </Card>
  );
};

export default FeedbackItem;
