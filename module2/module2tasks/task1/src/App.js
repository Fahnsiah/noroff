import { Routes, Route } from "react-router-dom";
import SideNav from "./components/nav/SideNav";
import Dashboard from "./components/Dashboard";
import Admin from "./components/admin/Admin";
import ToDo from "./components/todo/ToDo";

function App() {
  return (
    <div className="App">
      <SideNav />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </div>
  );
}

export default App;
