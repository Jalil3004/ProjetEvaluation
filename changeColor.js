const body = document.querySelector("body");
const input = document.getElementById("colorInput");

input.addEventListener("input", () => {
  const color = input.value;

  body.style.backgroundColor = color;
});
