import React, { useState } from "react";
import axiosInstance from "../axios/axiosInstance";

const Create = () => {
  const [newItem, setNewItem] = useState({
    id: 0,
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    is_superuser: false,
  });
  const [confirmPassword, setConfirmPasswrod] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const inputVal = { ...newItem, [name]: value };
    setNewItem(inputVal);
  };

  const handleGender = (x) => {
    const inputVal = { ...newItem, gender: x };
    setNewItem(inputVal);
    // alert(JSON.stringify(inputVal));
  };

  const handleSubmit = async () => {
    if (newItem.password && confirmPassword) {
      if (newItem.password !== confirmPassword) {
        alert("The password and its confirmation are not matched");
        return;
      }
    }
    await axiosInstance
      .post("user/", newItem)
      .then((response) => {
        let data = response.data;
        alert(JSON.stringify(data));
        // setData(data);
      })
      .catch((error) => {
        alert(error);
      });
    setNewItem({});
  };
  return (
    <div className="login-form">
      <p>Add New User</p>
      <div class="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={newItem.username}
          name="username"
          onChange={(e) => handleInput(e)}
          id="id_username"
        />
        <label for="id_username">Username</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="first name"
          value={newItem.first_name}
          name="first_name"
          onChange={(e) => handleInput(e)}
          id="id_first_name"
        />
        <label for="id_first_name">First Name</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="last name"
          value={newItem.last_name}
          name="last_name"
          onChange={(e) => handleInput(e)}
          id="id_last_name"
        />
        <label for="id_last_name">Last Name</label>
      </div>
      <label>Gender</label>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="gender"
          id="id_female"
          value={newItem.gender}
          onChange={() => handleGender("Female")}
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Female
        </label>
      </div>
      <div class="form-check mb-3">
        <input
          class="form-check-input"
          type="radio"
          name="gender"
          id="id_male"
          value={newItem.gender}
          onChange={() => handleGender("Male")}
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Male
        </label>
      </div>

      <div class="form-floating mb-3">
        <select
          className="form-control"
          placeholder="Confirm Password"
          name="is_superuser"
          value={newItem.role}
          onChange={(e) => handleInput(e)}
          id="id_role"
        >
          <option value={-1}>please select</option>
          <option value={1}>Administrator</option>
          <option value={0}>Registrar</option>
        </select>
        <label for="id_role">Role</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          value={newItem.password}
          onChange={(e) => handleInput(e)}
          id="id_password"
        />
        <label for="id_password">Password</label>
      </div>

      <div class="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="confirm password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPasswrod(e.target.value)}
          id="id_confirm_password"
        />
        <label for="id_confirm_password">Confrim Password</label>
      </div>

      <div class="d-grid gap-2">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
      <br />
    </div>
  );
};

export default Create;
