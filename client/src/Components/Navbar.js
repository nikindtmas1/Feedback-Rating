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
            // display: "inline",
            // display: 'inline-block',
            textDecoration: "none",
            backgroundColor: "#ff6a95",
            borderRadius: "10px",
            paddingLeft: '7px',
            paddingRight: '7px',
            fontSize: '20px'
            // padding: "3px",
          }}
        >
          Logout
        </Link>
        <Link to='/employees' style={{
            // display: "inline",
            // display: 'inline-block',
            textDecoration: "none",
            backgroundColor: "#ff6a95",
            borderRadius: "10px",
            paddingLeft: '7px',
            paddingRight: '7px',
            fontSize: '20px',
            marginLeft: '10px'
            // padding: "3px",
          }}>
          Employees
        </Link>
        </>
      ) : null}
    </div>
  );
};

export default Navbar;
