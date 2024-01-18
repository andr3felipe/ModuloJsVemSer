import { Prompt } from "prompt-sync";

const prompt: Prompt = require("prompt-sync")({ sigint: true });

let start: boolean = true;

while (start) {
  const firstNumber = getNumber("Insira o primeiro número: ");
  const secondNumber = getNumber("Insira o segundo número: ");
  const operationType = getOperation(
    `Insira o tipo de operação(+, -, * ou /): `
  );

  console.log(
    operation({ num1: firstNumber, num2: secondNumber, operationType })
  );

  start =
    prompt("Deseja fazer uma nova comparação? (S/N): ").toUpperCase() === "S"
      ? true
      : false;
}

function getNumber(message: string): number {
  let input = prompt(message);

  while (parseInt(input) !== Number(input)) {
    console.log("---> Por favor, insira um número válido <---.\n");

    input = prompt(message);
  }

  return Number(input);
}

function getOperation(message: string): string {
  let input = prompt(message);

  while (!["+", "-", "*", "/"].includes(input)) {
    console.log("---> Por favor, insira uma operação válida <---.\n");

    input = prompt(message);
  }

  return input;
}

interface operationProps {
  num1: number;
  num2: number;
  operationType: string;
}

function operation({
  num1,
  num2,
  operationType,
}: operationProps): string | undefined {
  if (operationType === "+") {
    return `O resultado da soma dos números é: ${Number(num1) + Number(num2)}`;
  }

  if (operationType === "-") {
    return `O resultado da subtração dos números é: ${
      Number(num1) - Number(num2)
    }`;
  }

  if (operationType === "*") {
    return `O resultado da multiplicação dos números é: ${
      Number(num1) * Number(num2)
    }`;
  }

  if (operationType === "/") {
    if (num2 === 0) return "Não é possível dividir por 0.";

    return `O resultado da divisão dos números é: ${
      Number(num1) / Number(num2)
    }`;
  }
}
