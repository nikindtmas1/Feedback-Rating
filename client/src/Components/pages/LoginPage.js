import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Card from "../shared/Card";
import { FeedbackContext } from "../../context/FeedbackContext";
import Login from "../shared/Login";
import Button from "../shared/Button";
import * as service from "../services/data";

const LoginPage = () => {
  const history = useHistory();
  const { feedbackByName, onLogin } = useContext(FeedbackContext);
  const peopleName = "start";

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let nameUser = formData.get("userLogin").trim();
    let password = formData.get("password").trim();

    service
      .login(nameUser, password)
      .then((logDate) => onLogin(logDate))
      .then(() => feedbackByName(peopleName))
      .then(() => history.push("/"));
  };

  const onClick = (e) => {
    e.preventDefault();

    feedbackByName(peopleName);
    history.push("/");
  };

  return (
    <Card>
      <div className="text-container">
        <div className="text-content">
          <form onSubmit={handleSubmit}>
            <Login />
          </form>
          <Link onClick={onClick} to="/" style={{ textDecoration: "none" }}>
            <Button version="secondary">Back</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default LoginPage;
