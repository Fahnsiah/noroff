// Function to make AJAX request
function fetchData() {
  // Perform an AJAX request
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/posts", // Sample API endpoint
    method: "GET", // HTTP GET request
    success: function (data) {
      // On successful response
      $("#result").html(JSON.stringify(data)); // Display data in the result div
    },
    error: function (xhr, status, error) {
      // On error response
      $("#result").html("Error: " + error); // Display error message in the result div
    },
  });
}
