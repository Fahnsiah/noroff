import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import TwosCounter from "./components/TwosCounter";

function App() {
  return (
    <div className="my-container" data-clear>
      <div className="my-page">
        <Routes>
          <Route path="/" element={<Counter />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
