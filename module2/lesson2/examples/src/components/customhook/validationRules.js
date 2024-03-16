// validationRules.js
const validationRules = {
  name: [
    { required: true, message: "Name is required" },
    { minLength: 3, message: "Name must be at least 3 characters long" },
    { maxLength: 20, message: "Name cannot exceed 20 characters" },
  ],
  email: [
    { required: true, message: "Email is required" },
    { pattern: /^\S+@\S+\.\S+$/, message: "Invalid email format" },
  ],
};

export default validationRules;
