import { Prompt } from "prompt-sync";

const prompt: Prompt = require("prompt-sync")({ sigint: true });

let start: boolean = true;

while (start) {
  const firstPersonName: string = getName("Insira o nome da primeira pessoa: ");
  const firstPersonAge: number = getAge("Insira a idade da primeira pessoa: ");

  const secondPersonName: string = getName("Insira o nome da segunda pessoa: ");
  const secondPersonAge: number = getAge("Insira a idade da segunda pessoa: ");

  console.log(
    calculateDifferenceInAge({
      firstPersonName,
      firstPersonAge,
      secondPersonName,
      secondPersonAge,
    })
  );

  start =
    prompt("Deseja fazer uma nova comparação? (S/N): ").toUpperCase() === "S"
      ? true
      : false;
}

function getAge(message: string): number {
  let input: string | null = prompt(message);

  while (input && parseInt(input) !== Number(input)) {
    console.log("---> Por favor, insira um número válido <---.\n");

    input = prompt(message);
  }

  return Number(input);
}

function getName(message: string): string {
  let input = prompt(message);
  const regex = /[a-z\s]/gi;

  while (typeof input !== "string" || !regex.test(input)) {
    console.log("---> Por favor, insira um nome válido. <---\n");

    input = prompt(message);
  }

  return input;
}

interface calculateDifferenceInAgeProps {
  firstPersonName: string;
  firstPersonAge: number;
  secondPersonName: string;
  secondPersonAge: number;
}

function calculateDifferenceInAge({
  firstPersonName,
  firstPersonAge,
  secondPersonName,
  secondPersonAge,
}: calculateDifferenceInAgeProps): string {
  if (Number(firstPersonAge) > Number(secondPersonAge)) {
    return `A primeira pessoa (${firstPersonName}) é mais velha que a segunda por ${
      firstPersonAge - secondPersonAge
    } ano(s).`;
  } else if (Number(firstPersonAge) < Number(secondPersonAge)) {
    return `A segunda pessoa (${secondPersonName}) é mais velha que a primeira por ${
      secondPersonAge - firstPersonAge
    } ano(s).`;
  } else {
    return `Ambas as pessoas (${firstPersonName} e ${secondPersonName}) têm a mesma idade.`;
  }
}
