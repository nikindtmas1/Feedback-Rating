import React from "react";
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from "./FeedbackItem";

const CatalogFeedback = () => {
  return (
    <div className="catalog-container">
      {/* <div>CatalogFeedback</div> */}
      <FeedbackItem />
    </div>
  );
};

export default CatalogFeedback;
