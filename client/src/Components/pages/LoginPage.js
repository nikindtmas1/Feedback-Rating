import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Card from "../shared/Card";
import { FeedbackContext } from "../../context/FeedbackContext";
import Login from "../shared/Login";

const LoginPage = () => {
  const history = useHistory();
  const { feedbackByName } = useContext(FeedbackContext);
  const peopleName = "start";

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let nameUser = formData.get('userLogin').trim();
    let password = formData.get('password').trim();

    let userData = {
      nameUser,
      password,
    };

    console.log(userData);

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
        </div>
      </div>
    </Card>
  );
};

export default LoginPage;
