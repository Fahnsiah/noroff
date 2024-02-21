var orders = [
  {
    order_date: "2024-02-10",
    customer_name: "John Doe",
    item: "Product A",
    quantity: 2,
    unit_price: 15.99,
    total_price: 31.98,
  },
  {
    order_date: "2024-02-11",
    customer_name: "Jane Smith",
    item: "Product B",
    quantity: 1,
    unit_price: 10.5,
    total_price: 10.5,
  },
  {
    order_date: "2024-02-10",
    customer_name: "Konneh Deen",
    item: "Product C",
    quantity: 2,
    unit_price: 15.99,
    total_price: 31.98,
  },
  {
    order_date: "2024-02-11",
    customer_name: "Morris Moses",
    item: "Product B",
    quantity: 1,
    unit_price: 10.5,
    total_price: 10.5,
  },
];

function loadOrder() {
  try {
    let tbody = document.getElementById("tbOrder");

    // Loop through the array of objects
    orders.forEach(function (order) {
      // Create a new table row
      // alert(JSON.stringify(order));
      var row = document.createElement("tr");

      // Create table data for each property
      var firstCell = document.createElement("td");
      firstCell.textContent = order.order_date;
      var secondCell = document.createElement("td");
      secondCell.textContent = order.customer_name;
      var thirdCell = document.createElement("td");
      thirdCell.textContent = order.item;
      var fourthCell = document.createElement("td");
      fourthCell.textContent = order.quantity;
      var fifthCell = document.createElement("td");
      fifthCell.textContent = order.unit_price;
      var sixthCell = document.createElement("td");
      sixthCell.textContent = order.total_price;

      // Append table data to the table row
      row.appendChild(firstCell);
      row.appendChild(secondCell);
      row.appendChild(thirdCell);
      row.appendChild(fourthCell);
      row.appendChild(fifthCell);
      row.appendChild(sixthCell);
      // Append the table row to the tbody
      tbody.appendChild(row);
    });
  } catch (error) {
    alert(error);
  }
}

this.loadOrder();
