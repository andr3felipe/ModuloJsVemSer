import { Prompt } from "prompt-sync";

const prompt: Prompt = require("prompt-sync")({ sigint: true });

let start: boolean = true;

while (start) {
  const firstNaturalNumber = getNumber("Insira o primeiro número natural: ");
  const secondNaturalNumber = getNumber("Insira o segundo número natural: ");

  console.log(sum({ num1: firstNaturalNumber, num2: secondNaturalNumber }));

  start =
    prompt("Deseja fazer uma nova comparação? (S/N): ").toUpperCase() === "S"
      ? true
      : false;
}

function getNumber(message: string): string {
  let input = prompt(message);

  while (parseInt(input) !== Number(input)) {
    console.log("---> Por favor, insira um número natural válido <---.\n");

    input = prompt(message);
  }

  return input;
}

interface sumProps {
  num1: string;
  num2: string;
}

function sum({ num1, num2 }: sumProps): string {
  return `O resultado da soma dos números naturais é: ${
    Number(num1) + Number(num2)
  }`;
}
