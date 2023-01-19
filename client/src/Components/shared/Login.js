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
        <input type="text" 
        name="userLogin" 
        placeholder="User Name" 
        pattern="[a-z]+" 
        title="Only lowercase letters allowed!" 
        required />
      </div>
      <div className="input-group">
        <input type="password" 
        name="password" 
        placeholder="Password"
        pattern="[a-z0-9]+"
        title="Password is not correct!"
        size='20'
        required />
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
