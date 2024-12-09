// src/services/employeeService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/employees/';

// Get all employees
export const getAllEmployees = () => {
  return axios.get(API_URL);
};

// Get a single employee by ID
export const getEmployeeById = (id) => {
  return axios.get(`${API_URL}${id}`);
};

// Create a new employee
export const createEmployee = (employeeData) => {
  return axios.post(API_URL, employeeData);
};

// Update an employee by ID
export const updateEmployee = (id, employeeData) => {
  return axios.put(`${API_URL}${id}`, employeeData);
};

// Delete an employee by ID
export const deleteEmployee = (id) => {
  return axios.delete(`${API_URL}${id}`);
};
