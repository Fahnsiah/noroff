function calculateHash() {
  // Get the input value
  const input = document.getElementById("input").value;

  // Calculate the SHA-3 hash
  const hash = sha3_256(input);

  // Display the hash
  document.getElementById("output").innerText = `SHA-3 Hash: ${hash}`;
}
