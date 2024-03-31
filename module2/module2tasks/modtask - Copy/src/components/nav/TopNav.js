import React from "react";

const TopNav = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand">Navbar</a>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
