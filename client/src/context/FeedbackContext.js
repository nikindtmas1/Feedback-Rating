import { createContext, useEffect, useState } from "react";
import * as services from '../Components/services/data';
import * as goshoServices from '../Components/services/goshoData';
//const host = "http://localhost:5000";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoadding, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [peopleName, setPeopleName] = useState('');
  const [feedbackEdit, setFeedbackEdit] = useState(false);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback =  () => {
    if(peopleName === 'gosho'){
      console.log(peopleName);
      goshoServices.getAll()
      // services.getAll()
      .then((result) => setFeedback(result))
      .then(() => setIsLoading(false))
      .then((err) => alert(err.massage))
    }else{
      console.log(peopleName);
      services.getAll()
      .then((result) => setFeedback(result))
      .then(() => setIsLoading(false))
      .then((err) => alert(err.massage))
    }
  
  };

  const addName = (name) => {
    setPeopleName(name);
  };

  const addFeedback = (data) => {
   
    services.createFeedback(data)
    .then(() => {
      services.getAll()
      .then((result) => setFeedback(result))
     
    })
    .then((err) => alert(err.massage))
  };

  const removeFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      services.deleteFeedback(id)
      .then(() => {
        const newFeedback = feedback.filter((item) => item._id !== id)

        setFeedback(newFeedback);
      })
      .then((err) => alert(err.massage))
      // .then((result) => setFeedback(result))

      // const newFeedback = feedback.filter((item) => item.id !== id);

    }
  };

  return (
    <FeedbackContext.Provider value={{ feedback, isLoadding, addFeedback, removeFeedback, addName, fetchFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};
