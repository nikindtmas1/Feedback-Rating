import { createContext, useEffect, useState } from "react";

import * as services from "../Components/services/data";
import * as fetchService from "../Components/fetchFeedback/fetchFeedbacks";
import * as addFeedbackService from "../Components/fetchFeedback/addFeedbacByName";
import * as removeFeedbackService from "../Components/fetchFeedback/removeFeedbackByName";
import * as userServices from "../Components/services/authService";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoadding, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({edit:false});
  const [peopleName, setPeopleName] = useState("");
  const [userInfo, setUserInfo] = useState(userServices.userInfoDate);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setPeopleName("start");
    fetchFeedback();
  }, []);

  const fetchFeedback = () => {
    services
      .getAll()
      .then((result) => setFeedback(result))
      .then(() => setIsLoading(false))
      .then((err) => alert(err.message));
  };

  const feedbackByName = (name) => {
    fetchService
      .fetchByName(name)
      .then((result) => setFeedback(result))
      .then(() => setPeopleName(name))
      .then((err) => alert(err.message));
  };

  const addFeedback = (data) => {
    addFeedbackService
      .addFeedbackByName(data)
      .then((result) => setFeedback(result))
      .then((err) => alert(err.message));
  };

  const removeFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      removeFeedbackService
        .deleteFeedbackByName(id, peopleName, feedback)
        .then((result) => setFeedback(result))
        .then((err) => alert(err.message));
    }
  };

  const editFeedback = (data) => {
      setFeedbackEdit({
        item: data,
        edit: true
      });
  };

  const updateFeedback = () => {

  }

  const onLogin = (logDate) => {
    let result = userServices.logInIvent(logDate);
    setUserInfo(result);
    setIsAuth(true);
  };

  const onLogout = () => {
    setUserInfo(userServices.userInfoDate);
    setIsAuth(false);
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
        user: userInfo,
        onLogin,
        onLogout,
        isAuth,
        editFeedback,
        updateFeedback,
        feedbackEdit
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
