import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../shared/Button";

const EmployeesPage = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <h3>EmployeesPage</h3>

      <Button version="secondary">
        <Link to="/" style={{ textDecoration: "none" }}>
          Back
        </Link>
      </Button>
    </div>
  );
};

export default EmployeesPage;
