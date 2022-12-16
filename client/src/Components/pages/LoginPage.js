import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import Card from "../shared/Card";
import { FeedbackContext } from "../../context/FeedbackContext";
import Button from "../shared/Button";

const LoginPage = () => {
  const history = useHistory();
  const { feedbackByName } = useContext(FeedbackContext);
  const peopleName = "start";

  const handleSubmit = (e) => {
    e.preventDefault();
    feedbackByName(peopleName);
    history.push("/");
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
            <h2
              style={{
                color: "rgb(45, 179, 206)",
              }}
            >
              Login
            </h2>
            <div className="input-group">
              <input type="text" name="userLogin" placeholder="User Name" />
            </div>
            <div className="input-group">
              <input type="password" name="password" placeholder="Password" />
            </div>
            <div className="button-login">
              <Button type="submit" disabled="false" version="tertiary">
                Submit
              </Button>
            </div>
            <Button type="submit" version="secondary">
              <Link
                onClick={onClick}
                to="/"
                style={{
                  color: "blue",
                }}
              >
                Back
              </Link>
            </Button>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default LoginPage;
