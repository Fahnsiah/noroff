import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="student-form">
        <div class="mb-3">
          <label for="first_name" class="form-label">
            First Name
          </label>
          <input type="text" class="form-control" id="first_name" />
        </div>
        <div class="mb-3">
          <label for="middle_name" class="form-label">
            Middle Name
          </label>
          <input type="text" class="form-control" id="middle_name" />
        </div>
        <div class="mb-3">
          <label for="last_name" class="form-label">
            Last Name
          </label>
          <input type="text" class="form-control" id="last_name" />
        </div>
        <div class="mb-3">
          <label for="last_name" class="form-label">
            Gender
          </label>
          <select class="form-control" id="gender">
            <option value="">please select</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="dob" class="form-label">
            Date of Birth
          </label>
          <input type="date" class="form-control" id="dob" />
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;





