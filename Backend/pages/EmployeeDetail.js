// src/pages/EmployeeDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const EmployeeDetail = () => {
  const { id } = useParams(); // Get the employee ID from the URL
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/employees/${id}`)
      .then((response) => setEmployee(response.data))
      .catch((error) => console.error('Error fetching employee details:', error));
  }, [id]);

  if (!employee) {
    return <p>Loading employee details...</p>;
  }

  return (
    <div>
      <h2>{employee.name}'s Details</h2>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Mobile:</strong> {employee.mobile}</p>
      <p><strong>Designation:</strong> {employee.designation}</p>
      <p><strong>Gender:</strong> {employee.gender}</p>
    </div>
  );
};

export default EmployeeDetail;
