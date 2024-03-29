import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Card from "../shared/Card";
import { FeedbackContext } from "../../context/FeedbackContext";
import Login from "../shared/Login";
import Button from "../shared/ButtonLogin";
import Alert from "../shared/Alert";
import * as service from "../services/data";

const LoginPage = () => {
  const history = useHistory();
  const { feedbackByName, onLogin, isAuth } = useContext(FeedbackContext);
  const peopleName = "start";
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let nameUser = formData.get("userLogin").trim();
    let password = formData.get("password").trim();

    if (!nameUser.match(/^(([a-z]+)$)/)) {
      return alert("User name is not corect!");
    }

    if (!password.match(/([a-z0-9]+)/)) {
      return alert("Password is not corect!");
    }
   
    
   
      service
      .login(nameUser, password)
      .then((logDate) => onLogin(logDate))
      .then(() => feedbackByName(peopleName))
      .then(() => history.push("/"))
      .catch(error => console.log(error), setIsError(true))
    
      setIsError(false)
  };

  const onClick = (e) => {
    e.preventDefault();

    feedbackByName(peopleName);
    history.push("/");
  };



  return (
    !isAuth ? 
    <div className="app-body text-login">
      {isError === true
      ?  <Alert type="error">
          <p>Error to fetch</p>
        </Alert>
      : null
      }
     
    <Card>
      <div className="text-container">
        <div className="text-content">
          <form onSubmit={handleSubmit} action="/" method="post">
            <Login />
          </form>
          <Link onClick={onClick} to="/" style={{ textDecoration: "none" }}>
            <Button version="secondary">Back</Button>
          </Link>
        </div>
      </div>
    </Card>
    </div>
    : <div>
      <div><h3>You are logged in !</h3></div>
      <Link onClick={onClick} to="/" style={{ textDecoration: "none" }}>
            <Button version="secondary">Back</Button>
          </Link>
    </div>
  );
};

export default LoginPage;
