import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import { FeedbackContext } from "../context/FeedbackContext";

function UserRoute(props) {

    const {isAuth} = useContext(FeedbackContext);

    return isAuth 
    ? <Route {...props} />
    : <Redirect to='/login' />
};

export default  UserRoute;