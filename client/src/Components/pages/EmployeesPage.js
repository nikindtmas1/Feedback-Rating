import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "../shared/Button";
import Card from "../shared/Card";
// import { FeedbackContext } from "../../context/FeedbackContext";

import * as employeeService from "../services/employeeData";

const EmployeesPage = () => {
  // const { employees } = useContext(FeedbackContext);
  const [employee, setEmployee] = useState([{ name: "start" }]);

  useEffect(() => {
    employeeService.getAll().then((result) => setEmployee(result));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const fTherName = formData.get('One');
    const secTherName = formData.get('Two');
    const threrdTherName = formData.get('Three');
    const fourdeTherName = formData.get('Four');
    const fiftTherName = formData.get('Five');

    console.log(fTherName, secTherName, threrdTherName, fourdeTherName, fiftTherName);
  };

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
            <form onSubmit={handleSubmit}>
              {Array.from(employee, (element, index) => (
                <div className="input-group">
                <input
                   style={{ width: "20px", backgroundColor: "aqua" }}
                   type="text"
                   id={element._id}
                   name="inum"
                   value={index + 1}
                   readOnly
                 />
                 <input 
                  type="text"
                  id="fname"
                  name={element.name}
                  value={element.title}
                 />
              </div>
              ))}
              <Button type='submit'>Submit</Button>
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
