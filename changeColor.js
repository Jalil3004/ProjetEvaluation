const box = document.getElementById("colorBox");
const input = document.getElementById("colorInput");

input.addEventListener("input", () => {
  const color = input.value;

  // Essayer d'appliquer la couleur
  box.style.backgroundColor = color;
  box.textContent = color || "Couleur";
});
