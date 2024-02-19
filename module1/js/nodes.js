const parentElement = document.getElementById("parent");
const ul = document.getElementById("ulChildren");
// Loop through each child node of the parent element
for (let i = 0; i < parentElement.children.length; i++) {
  const childNode = parentElement.children[i];
  const li = document.createElement("li");

  // Set the text content of the list item
  li.textContent = childNode.nodeName;

  // Append the new list item to the <ul> element
  ul.appendChild(li);

  // Output child node details
  //   console.log("Child Node:", childNode);
}
