const express = require('express');
const Employee = require('../models/employee');
const router = express.Router();

// Create a new employee
router.post('/', async (req, res) => {
  console.log(req.body);
  const { name, email, mobile, designation, gender, course, img } = req.body;
  try {
    const newEmployee = new Employee({ name, email, mobile, designation, gender, course, img });
    await newEmployee.save();
    res.json(newEmployee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all employees
router.get('/all', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Update employee
router.put('/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(employee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Delete employee
router.delete('/:id', async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Employee removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
