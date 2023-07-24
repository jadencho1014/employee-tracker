import React, { useRef } from "react";

const EmployeeForm = ({ employee, setEmployee }) => {
  const name = useRef(null);
  const salary = useRef(null);
  const dateHired = useRef(null);

  const addEmployee = (event) => {
    event.preventDefault();

    let d = dateHired.current.value.split("-");
    let newD = new Date(d[0], d[1], d[2]);

    setEmployee([
      ...employee,
      {
        name: name.current.value,
        salary: salary.current.value,
        dateHired: newD.getTime(),
      },
    ]);

    name.current.value = "";
    salary.current.value = null;
    dateHired.current.value = null;
  };

  return (
    <form className="employee-form" onSubmit={addEmployee}>
      <div className="form-inner">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full name"
          ref={name}
        />
        <input
          type="number"
          name="salary"
          id="salary"
          placeholder="Salary"
          ref={salary}
        />
        <input
          type="date"
          name="dateHired"
          id="dateHired"
          placeholder="Date hired"
          ref={dateHired}
        />
        <input type="submit" value="Add Employee" />
      </div>
    </form>
  );
};

export default EmployeeForm;
