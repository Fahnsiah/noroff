import React, { useState } from "react";
import useValidation from "./useValidation"; // Import the custom hook
import validationRules from "./validationRules"; // Import the validation rules

const InputForm = () => {
  const [values, setValues] = useState({ name: "", email: "" });
  const [errors, validateField, validateForm] = useValidation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    validateField(name, value, validationRules); // Validate field on change
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm(values, validationRules); // Validate entire form
    if (isValid) {
      // Submit form data
      console.log("Form submitted successfully:", values);
    } else {
      console.log("Form submission failed due to validation errors");
    }
  };

  return (
    <div className="my-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <div className="error">
            {" "}
            {errors.name && <span>{errors.name}</span>}
          </div>
        </div>
        <br />
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <div className="error">
            {errors.email && <span>{errors.email}</span>}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
