import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import EmployeeItem from "../EmployeeItem";

import Button from "../shared/Button";
import Card from "../shared/Card";
import { FeedbackContext } from "../../context/FeedbackContext";

import * as employeeService from "../services/employeeData";

const EmployeesPage = () => {
  const { employees } = useContext(FeedbackContext);
  console.log(employees);
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

    const data = [
      {"name": "One","title": fTherName}, 
      {"name": "Two","title": secTherName}, 
      {"name": "Three","title": threrdTherName}, 
      {"name": "Four","title": fourdeTherName}, 
      {"name": "Five","title": fiftTherName}
    ]
   console.log(data);
  };

  return (
    <div className="app-body text-login">
      
      {/* <Card>
        <div className="text-container">
          <div className="text-content">
            <h3
              style={{
                color: "rgb(45, 179, 206)",
              }}
            >
              Change Therapiests
            </h3>
            <form onSubmit={handleSubmit} action='/' method="put">
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
                  // value={element.title}
                  placeholder={element.title}
                  required='true'
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
      </Card> */}
      <AnimatePresence>
      {employees.map((item) => (
        <motion.div key={item.id} initial={{ opacity : 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <EmployeeItem key={item.id} item={item}/>
        </motion.div>
      ))};
      </AnimatePresence>
    </div>
  );
};

export default EmployeesPage;
