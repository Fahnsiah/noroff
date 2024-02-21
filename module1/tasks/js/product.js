// Create an array of objects, each containing name, current_debt, and payment_mode
var products = [
  { product_name: "Product 1", quantity_in_stock: 10, unit_price: 20.99 },
  { product_name: "Product 2", quantity_in_stock: 15, unit_price: 30.5 },
  { product_name: "Product 3", quantity_in_stock: 20, unit_price: 15.75 },
  { product_name: "Product 4", quantity_in_stock: 5, unit_price: 10.0 },
  { product_name: "Product 5", quantity_in_stock: 8, unit_price: 25.99 },
  { product_name: "Product 6", quantity_in_stock: 12, unit_price: 18.5 },
  { product_name: "Product 7", quantity_in_stock: 18, unit_price: 22.75 },
  { product_name: "Product 8", quantity_in_stock: 3, unit_price: 12.0 },
  { product_name: "Product 9", quantity_in_stock: 25, unit_price: 19.99 },
  { product_name: "Product 10", quantity_in_stock: 30, unit_price: 32.5 },
  { product_name: "Product 11", quantity_in_stock: 17, unit_price: 14.75 },
  { product_name: "Product 12", quantity_in_stock: 22, unit_price: 9.99 },
  { product_name: "Product 13", quantity_in_stock: 7, unit_price: 27.5 },
  { product_name: "Product 14", quantity_in_stock: 11, unit_price: 20.75 },
  { product_name: "Product 15", quantity_in_stock: 6, unit_price: 15.0 },
  { product_name: "Product 16", quantity_in_stock: 9, unit_price: 24.99 },
  { product_name: "Product 17", quantity_in_stock: 13, unit_price: 18.5 },
  { product_name: "Product 18", quantity_in_stock: 21, unit_price: 23.75 },
  { product_name: "Product 19", quantity_in_stock: 4, unit_price: 11.0 },
  { product_name: "Product 20", quantity_in_stock: 28, unit_price: 17.99 },
  { product_name: "Product 21", quantity_in_stock: 35, unit_price: 30.5 },
  { product_name: "Product 22", quantity_in_stock: 19, unit_price: 16.75 },
  { product_name: "Product 23", quantity_in_stock: 24, unit_price: 12.0 },
  { product_name: "Product 24", quantity_in_stock: 2, unit_price: 21.99 },
  { product_name: "Product 25", quantity_in_stock: 16, unit_price: 28.5 },
];

function loadProduct() {
  let tbody = document.getElementById("tbProduct");

  // Loop through the array of objects
  products.forEach(function (product) {
    // Create a new table row
    // alert(JSON.stringify(product));
    var row = document.createElement("tr");

    // Create table data for each property
    var nameCell = document.createElement("td");
    nameCell.textContent = product.product_name;
    var debtCell = document.createElement("td");
    debtCell.textContent = product.quantity_in_stock;
    var paymentCell = document.createElement("td");
    paymentCell.textContent = product.unit_price;

    // Append table data to the table row
    row.appendChild(nameCell);
    row.appendChild(debtCell);
    row.appendChild(paymentCell);
    // Append the table row to the tbody
    tbody.appendChild(row);
  });
}

this.loadProduct();
