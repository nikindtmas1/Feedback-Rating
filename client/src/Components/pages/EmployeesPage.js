import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import Button from "../shared/Button";
import Card from "../shared/Card";
import { FeedbackContext } from "../../context/FeedbackContext";

import * as employeeService from "../services/employeeData";

const EmployeesPage = () => {
  const { employees } = useContext(FeedbackContext);
  const [employee, setEmployee] = useState([{ name: "start" }]);

  useEffect(() => {
    employeeService.getAll().then((result) => setEmployee(result));
  }, []);

  return (
    <div className="app-body text-login">
      <Card>
        <div className="text-container">
          <div className="text-content">
            <h3
              style={{
                color: "rgb(45, 179, 206)",
              }}
            >
              Change Therapiests
            </h3>
            <form>
              {/* <label for="fname">{" "}Number{" "}:{" "}</label> */}
              <div className="input-group">
                <input
                  style={{ width: "20px", backgroundColor: "aqua" }}
                  type="text"
                  id="fname"
                  name="fname"
                  value={1}
                  readOnly
                />
                {/* <label for="lname">First name:</label> */}

                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={employee[0].name}
                ></input>
              </div>
            </form>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button version="secondary">Back</Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EmployeesPage;
