import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import { FeedbackContext } from "../context/FeedbackContext";

function GuestRoute(props) {
    
    const {isAuth} = useContext(FeedbackContext);
  
    return isAuth
      ? <Redirect to="/" />
      : <Route {...props} />;
  }
  
  export default GuestRoute;