// src/components/EmployeeForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  mobile: Yup.string().required('Required'),
  designation: Yup.string().required('Required'),
  gender: Yup.string().required('Required')
});

const EmployeeForm = ({ employee }) => {
  const handleSubmit = (values) => {
    if (employee) {
      // Update employee
      axios.put(`http://localhost:5001/api/employees/${employee._id}`, values)
        .then(response => alert('Employee updated successfully'))
        .catch(error => console.error('Error updating employee:', error));
    } else {
      // Create new employee
      axios.post('http://localhost:5001/api/employees', values)
        .then(response => alert('Employee created successfully'))
        .catch(error => console.error('Error creating employee:', error));
    }
  };

  return (
    <Formik
      initialValues={{
        name: employee ? employee.name : '',
        email: employee ? employee.email : '',
        mobile: employee ? employee.mobile : '',
        designation: employee ? employee.designation : '',
        gender: employee ? employee.gender : ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label>Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div>
            <label>Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label>Mobile</label>
            <Field name="mobile" type="text" />
            <ErrorMessage name="mobile" component="div" />
          </div>
          <div>
            <label>Designation</label>
            <Field name="designation" type="text" />
            <ErrorMessage name="designation" component="div" />
          </div>
          <div>
            <label>Gender</label>
            <Field name="gender" as="select">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Field>
            <ErrorMessage name="gender" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default EmployeeForm;
