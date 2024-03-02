import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Custom from "./components/Custom";
import External from "./components/External";
import Jstyle from "./components/Jstyle";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/customstyle" element={<Custom />}></Route>
          <Route path="/externalstyle" element={<External />}></Route>
          <Route path="/jstyle" element={<Jstyle />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
