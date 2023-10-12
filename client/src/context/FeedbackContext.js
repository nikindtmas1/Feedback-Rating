import { createContext, useEffect, useState } from "react";

import * as fetchService from "../Components/fetchFeedback/fetchFeedbacks";
import * as addFeedbackService from "../Components/fetchFeedback/addFeedbacByName";
import * as removeFeedbackService from "../Components/fetchFeedback/removeFeedbackByName";
import * as userServices from "../Components/services/authService";
import * as editFeedbackService from '../Components/fetchFeedback/editFeedbackById';
import * as employeesServices from '../Components/services/employeeData';

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoadding, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({item: {} ,edit:false});
  const [employeeEdit, setEmployeeEdit] = useState({item: {} ,edit:false});
  const [peopleName, setPeopleName] = useState("");
  const [therName, setTherName] = useState("");
  const [userInfo, setUserInfo] = useState(userServices.userInfoDate);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    window.localStorage.getItem('name') === null ?
    feedbackByName('start') : 
    feedbackByName(window.localStorage.getItem('name'))
    window.localStorage.getItem('isAuth') === 'true' ?
    setIsAuth(true) : setIsAuth(false)
  }, []);

  useEffect(() => {
    window.localStorage.setItem('name', therName)
    window.localStorage.setItem('isAuth', isAuth)
    employeesServices.getAll()
    .then((result) => setEmployees(result))
  },[isAuth, therName])

  const feedbackByName = (name) => {
    fetchService
      .fetchByName(name)
      .then((result) => setFeedback(result), setTherName(name), setIsLoading(false))
      .catch((err) => alert(err.message));
  };

  const addedName = (name) => {
    setPeopleName(name);
  }

  const addFeedback = (data) => {
    addFeedbackService
      .addFeedbackByName(data, therName)
      .then((result) => setFeedback(result))
      .catch((err) => alert(err.message));
  };

  const removeFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete feedback?")) {
      removeFeedbackService
        .deleteFeedbackByName(id, therName, feedback)
        .then((result) => setFeedback(result))
        .catch((err) => alert(err.message));
    }
  };

  const editFeedback = (item) => {
    window.scrollTo(0, 0);
      setFeedbackEdit({
        item: item,
        edit: true
      })
      
  };

  const updateFeedback = (id, data) => {
    if(window.confirm("Are you sure you want to edit feedback?")){
      editFeedbackService
      .editFeedbackById(id, therName, data)
      .then((result) => setFeedback(result))
      .then(() => setFeedbackEdit({item: {}, edit: false}))
      .catch((err) => alert(err.message))
    }
  }

  const editEmployee = (item) => {
      setEmployeeEdit(
        {
          item: item,
          edit: true
        }
      )
  };

  const onLogin = (logDate) => {
    let result = userServices.logInIvent(logDate);
    setUserInfo(result);
    setIsAuth(true);
  };

  const onLogout = () => {
    setUserInfo(userServices.userInfoDate);
    setIsAuth(false);
    setFeedbackEdit({item: {} ,edit:false});
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
        therName,
        user: userInfo,
        onLogin,
        onLogout,
        isAuth,
        editFeedback,
        updateFeedback,
        feedbackEdit,
        editEmployee,
        employeeEdit,
        employees,
        addedName,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
