import React from "react";
import { Link } from "react-router-dom";
import Card from "../shared/Card";
import Button from "../shared/Button";

const loginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Card>
      <div className="text-container">
        <div className="text-content">
          <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="input-group">
              <input type="text" name="userLogin" placeholder="User Name" />
            </div>
            <div className="input-group">
              <input type="password" name="password" placeholder="Password" />
            </div>
            <Button type="submit" isDisabled={false}>
              Submit
            </Button>
            <Link to="/">Home Page</Link>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default loginPage;
