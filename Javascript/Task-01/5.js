const prompt = require("prompt-sync")({ sigint: true });	

let start = true;

while(start) {
  const firstNaturalNumber = getNumber("Insira o primeiro número natural: ");
  const secondNaturalNumber = getNumber("Insira o segundo número natural: ");

  console.log(sum(firstNaturalNumber, secondNaturalNumber));

  start = prompt("Deseja fazer uma nova comparação? (S/N): ").toUpperCase() === "S" ? true : false;
}


function getNumber(message) {
  let input = prompt(message);

  while(parseInt(input) !== Number(input)) {
    console.log("---> Por favor, insira um número natural válido <---.\n");

    input = prompt(message);
  }

  return input
}

function sum(num1, num2) {

  return `O resultado da soma dos números naturais é: ${Number(num1) + Number(num2)}`
}

