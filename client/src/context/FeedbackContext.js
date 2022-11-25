import { createContext, useEffect, useState } from "react";

const host = "http://localhost:5000";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState(false);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const respons = await fetch(host + "/feedbacks");
    const data = respons.json();

    console.log(data);

    setFeedback(data);
    setIsLoading(false);
  };

  return (
    <FeedbackContext.Provider value={{ feedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};
