import { Routes, Route } from "react-router-dom";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import TokenBased from "./components/Authentication/Index";
function App() {
  return (
    <div className="container">
      <div className="row">
        <Heading />
      </div>
      <div className="row">
        <div className="col-md-2">
          <div className="bg-primary p-0">
            <Nav />
          </div>
        </div>
        <div className="col-md-10">
          <div className="bg-custom">
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/tokenbased" element={<TokenBased />}></Route>
            </Routes>
          </div>
        </div>
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;
