// Define the secret key
const secretKey = "MySecretKey123";
let encryptedData = "";
function encryptData() {
  try {
    const CryptoJS = require("crypto-js");
    // Define the data to be encrypted
    const data = document.getElementById("plaintext").value; //"Sensitive information";

    // Encrypt the data using AES encryption
    encryptedData = CryptoJS.AES.encrypt(data, secretKey).toString();
    alert(encryptedData);
    document.getElementById("encrypted").textContent = secretKey;
  } catch (error) {
    alert(error);
  }
}

// function decryptData() {
//   // Define the data to be encrypted
//   const data = document.getElementById("plaintext").value; //"Sensitive information";

//   // Encrypt the data using AES encryption
//   const encryptedData = CryptoJS.AES.encrypt(data, secretKey).toString();

//   document.getElementById("encrypted").textContent = data;

//   // Print the encrypted data
//   console.log("Encrypted data:", encryptedData);

//   // Decrypt the encrypted data
//   const decryptedData = CryptoJS.AES.decrypt(encryptedData, secretKey).toString(
//     CryptoJS.enc.Utf8
//   );

//   // Print the decrypted data
//   console.log("Decrypted data:", decryptedData);
// }
