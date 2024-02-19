const countries = [
  "Norway",
  "United States",
  "Canada",
  "United Kingdom",
  "France",
  "Germany",
  "Japan",
  "Brazil",
  "China",
  "India",
];

function showCountries() {
  const ul = document.getElementById("countryList");
  ul.textContent = null;

  countries.forEach((country) => {
    const li = document.createElement("li");
    li.textContent = country;
    ul.appendChild(li);
  });
}
