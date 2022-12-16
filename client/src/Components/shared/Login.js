import React from "react";
import Button from "./Button";

const Login = () => {
  return (
    <>
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
    </>
  );
};

export default Login;
