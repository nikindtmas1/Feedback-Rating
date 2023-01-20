import React, {useState, useEffect} from "react";
import Button from "./ButtonLogin";

const Login = () => {

const [btnDisabled, setBtnDisabled] = useState(true);
const [loginUserName, setLoginUserName] = useState('');
const [userPass, setUserPass] = useState('');

useEffect(() => {

  if(loginUserName.length === 0 || userPass.length === 0){
    setBtnDisabled(true);
  }else{
    setBtnDisabled(false)
  };

},[loginUserName, userPass]);

const handleUserLoginChange = (e) => {
  setLoginUserName(e.target.value);
};

const handleUserPass = (e) => {
  setUserPass(e.target.value)
};

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
        required
        value={loginUserName}
        onChange={handleUserLoginChange}
        />
      </div>
      <div className="input-group">
        <input type="password" 
        name="password" 
        placeholder="Password"
        pattern="[a-z0-9]+"
        title="Password is not correct!"
        size='20'
        required 
        value={userPass}
        onChange={handleUserPass}
        />
      </div>
      <div className="button-login">
        <Button type="submit" isDisabled={btnDisabled} version="tertiary">
          Submit
        </Button>
      </div>
    </>
  );
};

export default Login;
