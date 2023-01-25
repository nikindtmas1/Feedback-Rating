import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../shared/Button";
import Card from "../shared/Card";

import * as employeeService from "../services/employeeData";

const EmployeesPage = () => {
  const [employee, setEmployee] = useState([]);

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
              <label for="fname">{" "}Number{" "}:{" "}</label>
          
              <input type="text" id="fname" name="fname" value={employee[0].title}/>
            
              
              <div className="input-group">
              <label for="lname">First name:</label>

              <input type="text" id="lname" name="lname" />
              </div>
            </form>
            {/* <form>
              
            <div className="input-group">
            <input type='text'>Name</input>
            </div>
            <div className="input-group">
            <input type='text'>Title</input>

            </div>
          </form> */}
            <Button version="secondary">
              <Link to="/" style={{ textDecoration: "none" }}>
                Back
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default EmployeesPage;
