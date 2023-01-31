import React from "react";
import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuth } = useContext(FeedbackContext);

  return (
    <div className="navbar"
      style={{
        // backgroundColor: "rgb(45, 179, 206)",
        backgroundColor: "rgb(69, 201, 253)",
        color: "blue",
        textAlign: "center",
        padding: "4px",
        display: 'inline',
       
      }}
    >
      {isAuth ? (
        <>
        <Link
          to="/logout"
          style={{
            textDecoration: "none",
            backgroundColor: "#cccccc",
            borderRadius: "10px",
            paddingLeft: '7px',
            paddingRight: '7px',
            fontSize: '20px'
          }}
        >
          Logout
        </Link>
        <Link to='/employees' style={{
            textDecoration: "none",
            backgroundColor: "#cccccc",
            borderRadius: "10px",
            paddingLeft: '7px',
            paddingRight: '7px',
            fontSize: '20px',
            marginLeft: '10px'
          }}>
          Employees
        </Link>
        </>
      ) : null}
    </div>
  );
};

export default Navbar;
