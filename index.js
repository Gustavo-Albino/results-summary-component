// script.js
function animationClick() {
  const button = document.querySelector("button");

  // Altera a cor de fundo temporariamente
  const originalBackgroundColor = button.style.backgroundColor;
  button.style.backgroundColor = "#2c54c4"; // Cor desejada

  // Reseta a escala e a cor após 300 milissegundos
  setTimeout(function() {
    button.style.backgroundColor = originalBackgroundColor;
  }, 200);
}
