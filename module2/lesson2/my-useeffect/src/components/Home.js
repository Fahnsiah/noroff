import React, { useEffect, useState } from "react";

const Home = () => {
  // Define a state
  const [myData, setMyData] = useState(["Apple 1"]);
  const [newData, setNewData] = useState([]);

  // Define a function to fetch data
  const fetchData = () => {
    // A function that fetches data from a remote source and set the myData state
    // For this example, let us use a simple array
    let count = Object.keys(myData).length;
    let newFruit = "Apple " + ++count;
    setNewData(newFruit);
  };

  // Define a function to show data
  const showData = () => {
    let count = Object.keys(newData).length;
    if (count > 1) {
      let myNewData = [...myData, newData];
      setMyData(myNewData);
    }
  };

  useEffect(() => {
    showData();
  }, [newData]); //showData is called when the newData changes

  return (
    <div>
      <h2>Fetching Data Example</h2>
      <h4>
        <button
          onClick={() => {
            fetchData();
          }}
        >
          Fetch Data
        </button>
      </h4>
      <ul>
        {/* Map over the array of objects and render each item */}
        {myData &&
          myData.map((item, index) => item && <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

export default Home;
