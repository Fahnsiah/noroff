import React, { useState } from "react";

const MyCustomVal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [valid, setValid] = useState(false);

  const validateForm = () => {
    return (
      username.trim() !== "" &&
      password.trim() !== "" &&
      password === confirmPassword
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data
      setValid(true);
    } else {
      setValid(false);
    }
  };

  return (
    <div>
      <h3>Example of Validation with Custom Logic</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        {valid ? (
          <p>Form submitted successfully</p>
        ) : (
          <p>Please fill out all fields correctly</p>
        )}
      </form>
    </div>
  );
};

export default MyCustomVal;
