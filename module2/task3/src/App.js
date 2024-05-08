import { Routes, Route } from "react-router-dom";
import TopNav from "./components/nav/TopNav";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ToDo from "./components/todo/ToDo";
import PrivateRoute from "./components/routes/ProtectedRoute";
import SideNav from "./components/nav/SideNav";
import Footer from "./components/footer/Footer";
import Cookies from "js-cookie";

function App() {
  const token = Cookies.get("token");
  return (
    <div className="container">
      <div className="row top-banner">
        <div className="col-12 text-center">
          <TopNav />
        </div>
      </div>
      <div className="row">
        <div className={token ? "col-2 side-bar" : "hide-side-bar"}>
          <SideNav />
        </div>
        <div className={token ? "col-10 main-content" : "col-12 main-content"}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/todo" element={<ToDo />} />
            </Route>
          </Routes>
        </div>
      </div>

      <div className="row footer">
        <div className="col-12 text-center">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="container">
//       <SideNav />
// <Routes>
//   <Route path="/" element={<Login />} />
//   <Route element={<PrivateRoute />}>
//     <Route path="/dashboard" element={<Dashboard />} />
//     <Route path="/todo" element={<ToDo />} />
//   </Route>
// </Routes>
//     </div>
//   );
// }

// export default App;
