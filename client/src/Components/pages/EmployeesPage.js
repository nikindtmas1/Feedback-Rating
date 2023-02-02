import React, { useEffect, useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import EmployeeItem from "../EmployeeItem";
import Alert from "../shared/Alert";

import Button from "../shared/Button";
import Card from "../shared/Card";
import { FeedbackContext } from "../../context/FeedbackContext";

import * as employeeService from "../services/employeeData";

const EmployeesPage = () => {
  const { isAuth, employees, employeeEdit } = useContext(FeedbackContext);

  const history = useHistory();

  const [userName, setUserName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [newEmployees, setNewEmployees] = useState(employees);
  const [isAlert, setIsAlert] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setNewEmployees(employees);
  }, [employees]);

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

    if (!newName.match(/^[A-Z]/)) {
      setMessage("Name must start with uppercase letter");
      return alert("Uppercase letter please!");
    }

    if (employeeEdit.edit === true) {
      setIsAlert(true);
      employeeService
        .editEmployee(employeeEdit.item._id, data)
        .then(() => employeeService.getAll())
        .then((result) => setNewEmployees(result))
        .catch((error) => console.log(error), setIsError(true));
      setBtnDisabled(true);
      setUserName("");
      setIsChecked(false);
      setMessage("");
    }
  };

  const handleUserChange = (e) => {
    setUserName(e.target.value);
    setIsAlert(false);
  };

  const onCheckClick = (e) => {
    isChecked === true ? setIsChecked(false) : setIsChecked(true);
    setIsAlert(false);
  };

  const onClick = (e) => {
    e.preventDefault();
    history.push("/");
  };
  return isAuth ? (
    <div className="app-body text-login">
      <Card>
        <div className="text-container">
          {isAlert ? (
            <Alert type="success">
              <p>Success Edit</p>
            </Alert>
          ) : null}
          {isError ? (
            <Alert type="error">
              <p>Error to fetch</p>
            </Alert>
          ) : null}
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
                    Home Page
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
    </div>
  ) : (
    <div>
      <div>
        <h3>You are not logged in!</h3>
      </div>
      <Link onClick={onClick} to="/" style={{ textDecoration: "none" }}>
        <Button version="secondary">Back</Button>
      </Link>
    </div>
  );
};

export default EmployeesPage;
