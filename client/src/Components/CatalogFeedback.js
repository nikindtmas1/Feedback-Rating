import React, { useContext } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FeedbackContext } from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";
import Spinner from '../Components/shared/Spinner';

const CatalogFeedback = () => {
  const { feedback, isLoadding } = useContext(FeedbackContext);
 
  return !isLoadding && feedback.length === 0 ? 
  (
    <p><h4 style={{color: 'white'}}>No Feedback Yet</h4></p>
  ) : isLoadding ? (
    <Spinner />
  ): (
    <div className="feedback-list">
      <AnimatePresence>
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
