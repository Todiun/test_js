
let userInput = prompt("Parle au bot adolescent :");

userInput = userInput ? userInput.trim() : "";

function acneBot(input) {
  if (input === "") {
    return "t'es en PLS ?"; 
  }
  if (input.endsWith("?")) {
    return "Ouais Ouais...";
  }
  if (input === input.toUpperCase() && input.match(/[A-Z]/)) {
    return "Pwa, calme-toi...";
  }
  if (input.toLowerCase().includes("fortnite")) {
    return "on s' fait une partie soum-soum ?";
  }
  return "balek."; 
}

console.log(acneBot(userInput));
