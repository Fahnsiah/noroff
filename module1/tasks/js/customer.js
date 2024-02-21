// Create an array of objects, each containing name, current_debt, and payment_mode
var customers = [
  { name: "John", current_debt: 2000, payment_mode: "Credit Card" },
  { name: "Alice", current_debt: 1500, payment_mode: "PayPal" },
  { name: "Bob", current_debt: 3000, payment_mode: "Cash" },
  { name: "Emily", current_debt: 1800, payment_mode: "Credit Card" },
  { name: "David", current_debt: 2500, payment_mode: "PayPal" },
  { name: "Sarah", current_debt: 2200, payment_mode: "Cash" },
  { name: "Michael", current_debt: 2700, payment_mode: "Credit Card" },
  { name: "Olivia", current_debt: 1900, payment_mode: "PayPal" },
  { name: "Daniel", current_debt: 3200, payment_mode: "Cash" },
  { name: "Emma", current_debt: 2100, payment_mode: "Credit Card" },
];

function loadCustomer() {
  let tbody = document.getElementById("tbCustomer");

  // Loop through the array of objects
  customers.forEach(function (customer) {
    // Create a new table row
    var row = document.createElement("tr");

    // Create table data for each property
    var nameCell = document.createElement("td");
    nameCell.textContent = customer.name;
    var debtCell = document.createElement("td");
    debtCell.textContent = customer.current_debt;
    var paymentCell = document.createElement("td");
    paymentCell.textContent = customer.payment_mode;

    // Append table data to the table row
    row.appendChild(nameCell);
    row.appendChild(debtCell);
    row.appendChild(paymentCell);

    // Append the table row to the tbody
    tbody.appendChild(row);
  });
}

this.loadCustomer();
