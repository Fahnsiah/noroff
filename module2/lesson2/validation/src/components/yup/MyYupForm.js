import React, { useState } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const MyYupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      // Form data is valid, proceed with submission
      console.log("Form data is valid:", formData);
    } catch (error) {
      // Validation error occurred, update error state
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <h3>Example of Validation with Yup</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={handleChange}
            value={formData.firstName}
          />
          {errors.firstName && <div>{errors.firstName}</div>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={handleChange}
            value={formData.lastName}
          />
          {errors.lastName && <div>{errors.lastName}</div>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={formData.email}
          />
          {errors.email && <div>{errors.email}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyYupForm;
