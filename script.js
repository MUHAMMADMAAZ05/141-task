const colors = ["#F1f5f8", "#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FF8C33", "#FFD133"];
const colorCode = document.getElementById("colorCode");
const colorButton = document.getElementById("colorButton");

colorButton.addEventListener("click", () => {
  // Generate a random index for the colors array
  const randomIndex = Math.floor(Math.random() * colors.length);
  
  // Get the color at the random index
  const selectedColor = colors[randomIndex];
  
  // Change the background color
  document.body.style.backgroundColor = selectedColor;
  
  // Update the displayed color code
  colorCode.innerHTML = `Background Color: <span>${selectedColor}</span>`;
});
