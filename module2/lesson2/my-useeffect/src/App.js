import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
import LogDate from "./components/LogDate";

function App() {
  return (
    <div className="my-container" data-clear>
      <div className="my-page">
        <Routes>
          <Route path="/" element={<LogDate />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
