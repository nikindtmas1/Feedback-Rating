import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import EmployeeItem from "../EmployeeItem";

import Button from "../shared/Button";
import Card from "../shared/Card";
import { FeedbackContext } from "../../context/FeedbackContext";

import * as employeeService from "../services/employeeData";

const EmployeesPage = () => {
  const { isAuth, employees, employeeEdit } = useContext(FeedbackContext);

  const [userName, setUserName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [newEmployees, setNewEmployees] = useState(employees)

  useEffect(() => {
    if (employeeEdit.edit === true) {
      setBtnDisabled(false);
      setUserName(employeeEdit.item.title);
      setIsChecked(employeeEdit.item.check);
    }
  }, [employeeEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newName = formData.get("userName");

    const data = {
      name: employeeEdit.item.name,
      title: newName,
      check: isChecked,
    };

    if(!newName.match(/^[A-Z]/)){
        setMessage("Name must start with uppercase letter")
        return alert("Uppercase letter please!")
    };

    if (employeeEdit.edit === true) {
      employeeService.editEmployee(employeeEdit.item._id, data)
      .then(() => employeeService.getAll())
      .then((result) => setNewEmployees(result))
      setBtnDisabled(true);
      setUserName("");
      setIsChecked(false);
      setMessage("");
    }
  };

  const handleUserChange = (e) => {
    setUserName(e.target.value);
  };

  const onCheckClick = (e) => {
    isChecked === true ? setIsChecked(false) : setIsChecked(true);
  };

  return (
    isAuth ? 
    
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
              <div className="input-group">
                <input
                  type="checkbox"
                  name="check"
                  value={isChecked}
                  checked={isChecked}
                  onClick={onCheckClick}
                />
                <input
                  type="text"
                  name="userName"
                  // placeholder="Write name pleas!"
                  value={userName}
                  onChange={handleUserChange}
                />
              </div>
              <div className="input-group">
                <Button type="submit" isDisabled={btnDisabled}>
                  Send
                </Button>
                <Link to="/">
                  <Button type="submit" isDisabled={false} version="tertiary">
                    Back
                  </Button>
                </Link>
              </div>

              {message && <div className="message">{message}</div>}
            </form>
          </div>
        </div>
      </Card>

      <AnimatePresence>
        {newEmployees.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <EmployeeItem key={item.id} item={item} />
          </motion.div>
        ))}
        ;
      </AnimatePresence>
    </div>  : <div><h3>You are not loged in!</h3></div>
    
  );
};

export default EmployeesPage;
