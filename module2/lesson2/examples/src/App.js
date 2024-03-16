import { Routes, Route } from "react-router-dom";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Reducer from "./components/Reducer";
import ParentComponent from "./components/usecallback/ParentComponent";
import UseMemoComponent from "./components/useMemo/UseMemoComponent";
import UseRefComponent from "./components/useRef/Index";
import PreviousValue from "./components/useRef/PeviousValue";
import CustomHook from "./components/customhook/Index";
import InputForm from "./components/customhook/InputForm";
import MyUseLayout from "./components/useLayoutEffect/Index";
import MyImperativeHandle from "./components/useImperativeHandle/Index";
import RandomNumberGenerator from "./components/RandomNumberGenerator";
import ContainerPresentation from "./components/containerpresentation/Index";
import StateLifting from "./components/statelifting/Index";
import PropDrilling from "./components/propdrilling/Index";
import IndexWithLogger from "./components/hoc/IndexWithLogger";
import TokenBased from "./components/tokenbased/Index";

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
              <Route path="/reducer" element={<Reducer />}></Route>
              <Route path="/callback" element={<ParentComponent />}></Route>
              <Route path="/usememo" element={<UseMemoComponent />}></Route>
              <Route path="/useref" element={<UseRefComponent />}></Route>
              <Route path="/previousvalue" element={<PreviousValue />}></Route>
              <Route path="/customhook" element={<CustomHook />}></Route>
              <Route path="/inputform" element={<InputForm />}></Route>
              <Route path="/uselayouteffect" element={<MyUseLayout />}></Route>
              <Route
                path="/randomnumber"
                element={<RandomNumberGenerator />}
              ></Route>
              <Route
                path="/useimperativehandle"
                element={<MyImperativeHandle />}
              ></Route>
              <Route
                path="/containerpresentation"
                element={<ContainerPresentation />}
              ></Route>
              <Route path="/statelifting" element={<StateLifting />}></Route>
              <Route path="/propdrilling" element={<PropDrilling />}></Route>
              <Route path="/hoc" element={<IndexWithLogger />}></Route>
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
