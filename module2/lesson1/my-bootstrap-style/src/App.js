import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import Member from "./components/Member";
import Footer from "./components/Footer";
import Contribution from "./components/Contribution";
import ButtonStyling from "./components/ButtonStyling";

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
              <Route path="/" element={<ButtonStyling />}></Route>
              <Route path="/member" element={<Member />}></Route>
              <Route path="/contribution" element={<Contribution />}></Route>
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
