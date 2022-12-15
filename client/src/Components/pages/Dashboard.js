import React from "react";
import FeedbackForm from "../FeedbackForm";
import FeedbackStats from "../FeedbackStats";
import CatalogFeedback from "../CatalogFeedback";
import AboutIconLink from "../AboutIconLink";

const Dashboard = () => {
  return (
    <>
      <div>
        <FeedbackForm />
        <FeedbackStats />
        <CatalogFeedback />
      </div>
      <AboutIconLink />
    </>
  );
};

export default Dashboard;
