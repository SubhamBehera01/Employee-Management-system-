
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Front/components/Navbar';
import EmployeeList from './Front/components/EmployeeList';
import EmployeeForm from './Front/components/EmployeeForm';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import EmployeeDetail from './pages/EmployeeDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/new" element={<EmployeeForm />} />
        <Route path="/employees/:id" element={<EmployeeDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
