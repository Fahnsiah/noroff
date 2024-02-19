function fetchData() {
  fetch(" https://jsonplaceholder.typicode.com/todos ")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error fetching data:", error));
}

// fetchData();

function postData() {
  fetch(" https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: 123,
      title: "First Task",
      completed: false,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log("Data saved:", data))
    .catch((error) => console.error("Error saving data:", error));
}

postData();
