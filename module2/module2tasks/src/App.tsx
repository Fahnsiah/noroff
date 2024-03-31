import React, { useEffect, useState } from "react";
import axios from "axios";

interface ToDo {
  id: number;
  activity: string;
  status: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<ToDo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ToDo[]>(
          "https://noroffapi.pythonanywhere.com/todo/"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Async Example</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.activity}</h2>
            <p>{item.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

// import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <h2>React Redux and TypeScript</h2>
//     </div>
//   );
// }

// export default App;
