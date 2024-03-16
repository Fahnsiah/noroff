import { useState } from "react";

const useValidation = () => {
  const [errors, setErrors] = useState({});

  const validateField = (name, value, validationRules) => {
    let error = "";

    // Check if validation rules are provided for the field
    if (validationRules && validationRules[name]) {
      const rules = validationRules[name];

      // Check each validation rule for the field
      for (const rule of rules) {
        if (rule.required && !value.trim()) {
          error = "This field is required";
          break; // Stop validation if required rule fails
        }

        if (rule.minLength && value.length < rule.minLength) {
          error = `Minimum length is ${rule.minLength} characters`;
          break; // Stop validation if minLength rule fails
        }

        if (rule.maxLength && value.length > rule.maxLength) {
          error = `Maximum length is ${rule.maxLength} characters`;
          break; // Stop validation if maxLength rule fails
        }

        if (rule.pattern && !rule.pattern.test(value)) {
          error = "Invalid format";
          break; // Stop validation if pattern rule fails
        }
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));

    return error === "";
  };

  const validateForm = (values, validationRules) => {
    const newErrors = {};
    let isValid = true;

    for (const key in values) {
      if (Object.hasOwnProperty.call(values, key)) {
        const value = values[key];
        const fieldIsValid = validateField(key, value, validationRules);
        if (!fieldIsValid) {
          isValid = false;
        }
      }
    }

    return isValid;
  };

  return [errors, validateField, validateForm];
};

export default useValidation;
