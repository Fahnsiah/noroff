function postData() {
  var formData = new FormData();
  formData.append("userId", 512);
  formData.append("title", "Second Task");
  formData.append("completed", false);

  fetch(" https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => console.log("Form submitted:", data))
    .catch((error) => console.error("Error submitting form:", error));
}

postData();
