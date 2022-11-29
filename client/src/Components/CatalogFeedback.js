import React, { useContext } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FeedbackContext } from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

const CatalogFeedback = () => {
  let value = useContext(FeedbackContext);
  console.log(value.feedback);
  return (
    <div className="feedback-list">
      {/* <div>CatalogFeedback</div> */}
      <FeedbackItem />
    </div>
  );
};

export default CatalogFeedback;
