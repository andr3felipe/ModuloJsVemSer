const prompt = require("prompt-sync")({ sigint: true });	

let start = true;

while(start) {
  const firstNumber = getNumber("Insira o primeiro número: ");
  const secondNumber = getNumber("Insira o segundo número: ");
  const operationType = getOperation(`Insira o tipo de operação(+, -, * ou /): `);

  console.log(operation(firstNumber, secondNumber, operationType))

  start = prompt("Deseja fazer uma nova comparação? (S/N): ").toUpperCase() === "S" ? true : false;
}


function getNumber(message) {
  let input = prompt(message);

  while(parseInt(input) !== Number(input)) {
    console.log("---> Por favor, insira um número válido <---.\n");

    input = prompt(message);
  }

  return input
}

function getOperation(message) {
  let input = prompt(message);

  while(!["+", "-", "*", "/"].includes(input)) {
    console.log("---> Por favor, insira uma operação válida <---.\n");

    input = prompt(message);
  }

  return input
}

function operation(num1, num2, operationType) {

  if(operationType === "+") {
    return `O resultado da soma dos números é: ${Number(num1) + Number(num2)}`;
  }
  
  if(operationType === "-") {
    return `O resultado da subtração dos números é: ${Number(num1) - Number(num2)}`;
  }
  
  if(operationType === "*") {
    return `O resultado da multiplicação dos números é: ${Number(num1) * Number(num2)}`;
  }
  
  if(operationType === "/") {
    if(num2 === "0") return "Não é possível dividir por 0."
    
    return `O resultado da divisão dos números é: ${Number(num1) / Number(num2)}`;
  }
}

