import React from "react";
import EmployeeItem from "./EmployeeItem";

const EmployeeList = ({ employee, setEmployee }) => {
  const removeEmployee = (i) => {
    let temp = employee.filter((value, index) => index !== i);
    setEmployee(temp);
  };

  const salarySort = (a, b) => {
    return b.salary - a.salary;
  };

  return (
    <div className="employee-list">
      {employee.sort(salarySort).map((value, index) => (
        <EmployeeItem
          key={index}
          employee={value}
          index={index}
          removeEmployee={removeEmployee}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
