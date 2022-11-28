import { createContext, useEffect, useState } from "react";
import * as services from '../Components/services/data';
//const host = "http://localhost:5000";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState(false);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback =  () => {
    
    services.getAll()
    .then((result) => setFeedback(result))
    .then(() => setIsLoading(false))
    .then((err) => alert(err.massage))
    // const respons = await fetch(host + "/feedbacks");
    // const data = respons.json();

    // console.log(data);

    // setFeedback(data);
    // setIsLoading(false);
  };

  const addFeedback = () => {
    services.createFeedback()
  };

  return (
    <FeedbackContext.Provider value={{ feedback, isLoading }}>
      {children}
    </FeedbackContext.Provider>
  );
};
