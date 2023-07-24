import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [employee, setEmployee] = useState([]);

  return (
    <div className="App">
      <Header />
      <EmployeeForm employee={employee} setEmployee={setEmployee} />
      <EmployeeList employee={employee} setEmployee={setEmployee} />
    </div>
  );
}

export default App;
