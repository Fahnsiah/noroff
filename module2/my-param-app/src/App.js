import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <h1>React Parameter Example</h1>

      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile/:username" element={<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
