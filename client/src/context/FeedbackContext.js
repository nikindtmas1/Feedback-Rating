import { createContext, useEffect, useState } from "react";
import * as services from '../Components/services/data';
import * as goshoServices from '../Components/services/goshoData';
import * as toshoServices from '../Components/services/toshoData';
//const host = "http://localhost:5000";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoadding, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState(false);
  const [peopleName, setPeopleName] = useState('');


  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback =  () => {

      services.getAll()
      .then((result) => setFeedback(result))
      .then(() => setIsLoading(false))
   
      .then((err) => alert(err.massage))
    
  
  };

  const feedbackByName = (name) => {

    if(name === 'gosho'){
      goshoServices.getAll()
      .then((result) => setFeedback(result))
      .then(() => setPeopleName(name))
      .then((err) => alert(err.massage))
    }else if(name === 'tosho'){
      toshoServices.getAll()
      .then((result) => setFeedback(result))
      .then((err) => alert(err.massage))
    }
  };

  

  const addFeedback = (data) => {
    if(peopleName === 'gosho'){
      goshoServices.createGoshoFeedback(data)
      .then(() => {
        goshoServices.getAll()
        .then((result) => setFeedback(result))
      })
      .then((err) => alert(err.massage));
    }else{

      services.createFeedback(data)
      .then(() => {
        services.getAll()
        .then((result) => setFeedback(result))
       
      })
      .then((err) => alert(err.massage))
    }
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
    <FeedbackContext.Provider value={{ 
      feedback, 
      isLoadding, 
      addFeedback, 
      removeFeedback, 
      feedbackByName, 
      fetchFeedback 
      }}>
      {children}
    </FeedbackContext.Provider>
  );
};
