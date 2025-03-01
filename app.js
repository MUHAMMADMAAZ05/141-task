const colors = ["#F1f5f8", "#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FF8C33", "#FFD133"];
const colorCode = document.getElementById("colorCode");
const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  console.log(randomIndex);
  
  const selectedColor = colors[randomIndex];
  console.log(selectedColor);
  
  document.body.style.backgroundColor = selectedColor;
  colorCode.innerHTML = `Background Color: <span>${selectedColor}</span>`;
});
