import React from "react";

const EmployeeItem = ({ employee, index, removeEmployee }) => {
  let dateHired = new Date(employee.dateHired);
  let day = dateHired.getDate();
  let month = dateHired.getMonth() + 1;
  let year = dateHired.getFullYear();

  const handleRemove = (i) => {
    removeEmployee(i);
  };

  return (
    <div className="employee-item">
      <div className="name">{employee.name}</div>
      <div className="salary">${employee.salary}</div>
      <div className="date-hired">{month + "/" + day + "/" + year}</div>
      <button className="remove-item" onClick={() => handleRemove(index)}>
        Delete
      </button>
    </div>
  );
};

export default EmployeeItem;
