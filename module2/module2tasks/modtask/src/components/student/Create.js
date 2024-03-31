import React from "react";
import axiosInstance from "../axios/axiosInstance";

const Create = ({ newItem, setNewItem, getData, handleCreateMode }) => {
  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const inputVal = { ...newItem, [name]: value };
    setNewItem(inputVal);
  };

  const handleGender = (x) => {
    const inputVal = { ...newItem, gender: x };
    setNewItem(inputVal);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!newItem.gender) {
        alert("Please select the gender");
        return;
      } else {
        if (newItem.id > 0) {
          await axiosInstance
            .put(`student/${newItem.id}/`, newItem)
            .then((response) => {
              getData();
              handleCreateMode();
            })
            .catch((error) => {
              alert(error);
            });
        } else {
          await axiosInstance
            .post("student/", newItem)
            .then((response) => {
              getData();
              handleCreateMode();
            })
            .catch((error) => {
              alert(error);
            });
        }

        setNewItem({});
      }
    } catch {
      console.error("Handle Submit error");
    }
  };

  return (
    <div className="login-form">
      <p>Add New Student</p>
      <form onSubmit={handleSubmit} class="row g-3 needs-validation" novalidate>
        <div class="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="first name"
            value={newItem.first_name}
            name="first_name"
            onChange={(e) => handleInput(e)}
            id="id_first_name"
            required
          />
          <label for="id_first_name">First Name</label>
          <div class="invalid-feedback">Please provide the first name.</div>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="middle name"
            value={newItem.middle_name}
            name="middle_name"
            onChange={(e) => handleInput(e)}
            id="id_middle_name"
          />
          <label for="id_middle_name">Middle Name</label>
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
            required
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
          <input
            type="date"
            className="form-control"
            placeholder="date of birth"
            name="dob"
            value={newItem.dob}
            onChange={(e) => handleInput(e)}
            id="id_dob"
            required
          />
          <label for="id_dob">Date of Birth</label>
        </div>

        <div class="d-grid gap-2">
          <button
            className="btn btn-primary"
            type="submit"
            // onClick={handleSubmit}
          >
            {newItem.id > 0 ? "Save Changes" : " Save"}
          </button>
        </div>
        <br />
      </form>
    </div>
  );
};

export default Create;
