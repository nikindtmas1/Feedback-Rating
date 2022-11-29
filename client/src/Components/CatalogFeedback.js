import React, { useContext } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FeedbackContext } from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";
import Spinner from '../Components/shared/Spinner';

const CatalogFeedback = () => {
  const { feedback, isLoadding } = useContext(FeedbackContext);
  // let value = useContext(FeedbackContext);
  // console.log(value.feedback);
  return !isLoadding && feedback.length === 0 ? 
  (
    <p>No Feedback Yet</p>
  ) : isLoadding ? (
    <Spinner />
  ): (
    <div className="feedback-list">
      <AnimatePresence>
      {/* <div>CatalogFeedback</div> */}
      {feedback.map((item) => (
        <motion.div key={item.id} initial={{ opacity : 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <FeedbackItem key={item.id} item={item} />
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  );
};

export default CatalogFeedback;
