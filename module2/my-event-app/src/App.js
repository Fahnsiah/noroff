import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import MyForm from "./components/MyForm";
import MyValid from "./components/MyValid";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MyValid />}></Route>
      </Routes>
    </div>
  );
}

export default App;
