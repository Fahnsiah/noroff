function validateFile() {
  const fileInput = document.getElementById("file");
  const file = fileInput.files[0];

  // Check if file is selected
  if (!file) {
    alert("Please select a file.");
    return false;
  }

  // Check file type
  const fileType = file.type.split("/")[0];
  if (fileType !== "image") {
    alert("Please select an image file.");
    return false;
  }

  // Check file size (in bytes)
  const maxSize = 5 * 1024 * 1024; // 5 MB
  if (file.size > maxSize) {
    alert("File size exceeds the limit of 5MB.");
    return false;
  }

  return true; // File is valid
}
