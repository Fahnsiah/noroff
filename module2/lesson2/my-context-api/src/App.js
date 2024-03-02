import { useState } from "react";
import "./App.css";
import AppContext from "./context/AppContext";
import ChildComponent from "./components/ChildComponent";
import ParentComponent from "./components/ParentComponent";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const data = {
    message: "Hello from Context API!",
    count: count,
    increment: increment,
  };
  return (
    <AppContext.Provider value={data}>
      <div className="my-container" data-clear>
        <div className="my-page">
          <ParentComponent />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
