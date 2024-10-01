const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", () => {
  let name = input.value.trim();

  if (name === "") {
    name = "Anonymous";
  }

  output.textContent = name;
});
