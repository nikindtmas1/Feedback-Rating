import React, { useContext } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FeedbackContext } from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

const CatalogFeedback = () => {
  let value = useContext(FeedbackContext);
  console.log(value);
  return (
    <div className="catalog-container">
      {/* <div>CatalogFeedback</div> */}
      <FeedbackItem />
    </div>
  );
};

export default CatalogFeedback;
