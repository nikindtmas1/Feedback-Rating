import React from "react";
import FeedbackForm from "../FeedbackForm";
import FeedbackStats from "../FeedbackStats";
import CatalogFeedback from "../CatalogFeedback";

const Dashboard = () => {
  return (
    <div>
      <FeedbackForm />
      <FeedbackStats />
      <CatalogFeedback />
    </div>
  );
};

export default Dashboard;
