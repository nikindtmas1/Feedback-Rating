import { createContext, useEffect, useState } from "react";
import * as services from "../Components/services/data";
import * as goshoServices from "../Components/services/goshoData";
import * as toshoServices from "../Components/services/toshoData";
//const host = "http://localhost:5000";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoadding, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState(false);
  const [peopleName, setPeopleName] = useState("");

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = () => {
    services
      .getAll()
      .then((result) => setFeedback(result))
      .then(() => setIsLoading(false))

      .then((err) => alert(err.massage));
  };

  const feedbackByName = (name) => {
    if (name === "Gosho") {
      goshoServices
        .getAll()
        .then((result) => setFeedback(result))
        .then(() => setPeopleName(name))
        .then((err) => alert(err.massage));
    } else if (name === "Tosho") {
      toshoServices
        .getAll()
        .then((result) => setFeedback(result))
        .then(() => setPeopleName(name))
        .then((err) => alert(err.massage));
    }else if(name === 'start'){ 
      console.log(name);
       setPeopleName(name);
    } else if (
      name !== "Gosho" &&
      name !== "Tosho" &&
      name !== "pesho" &&
      name !== "tomi"
    ) {
      fetchFeedback();
    }
  };

  const addFeedback = (data) => {
    if (peopleName === "Gosho") {
      goshoServices
        .createGoshoFeedback(data)
        .then(() => {
          goshoServices.getAll().then((result) => setFeedback(result));
        })
        .then((err) => alert(err.message));
    } else if(peopleName === 'Tosho'){
      toshoServices
      .createToshoFeedback(data)
      .then(() => {
        toshoServices.getAll()
        .then((result) => setFeedback(result))
      })
      .then((err) => alert(err.message))
    } 
    else {
      services
        .createFeedback(data)
        .then(() => {
          services.getAll().then((result) => setFeedback(result));
        })
        .then((err) => alert(err.massage));
    }
  };

  const removeFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      if (peopleName === "Gosho") {
        goshoServices
          .deleteGoshoFeedback(id)
          .then(() => {
            const newFeedback = feedback.filter((item) => item._id !== id);

            setFeedback(newFeedback);
          })
          .then((err) => alert(err.message));
      } else {
      }
      services
        .deleteFeedback(id)
        .then(() => {
          const newFeedback = feedback.filter((item) => item._id !== id);

          setFeedback(newFeedback);
        })
        .then((err) => alert(err.message));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        isLoadding,
        addFeedback,
        removeFeedback,
        feedbackByName,
        peopleName,
        fetchFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
