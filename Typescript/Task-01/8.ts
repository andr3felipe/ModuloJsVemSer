import { Prompt } from "prompt-sync";

const prompt: Prompt = require("prompt-sync")({ sigint: true });

let start: boolean = true;

while (start) {
  const firstGrade = getNumber("Insira a primeira nota (P1): ");
  const firstGradeWeight = getNumber("Insira o peso da primeira nota (P1): ");

  const secondGrade = getNumber("Insira a segunda nota (P2): ");
  const secondGradeWeight = getNumber("Insira o peso da segunda nota (P2): ");

  const thirdGrade = getNumber("Insira a terceira nota (P3): ");
  const thirdGradeWeight = getNumber("Insira o peso da terceira nota (P3): ");

  console.log(
    averageGrade({
      firstGrade,
      firstGradeWeight,
      secondGrade,
      secondGradeWeight,
      thirdGrade,
      thirdGradeWeight,
    })
  );

  start =
    prompt("Deseja fazer uma nova comparação? (S/N): ").toUpperCase() === "S"
      ? true
      : false;
}

function getNumber(message: string): number {
  let input = Number(prompt(message));

  while (isNaN(input)) {
    console.log("---> Por favor, insira um número válido <---.\n");

    input = Number(prompt(message));
  }

  return Number(input);
}

interface averageGradeProps {
  firstGrade: number;
  firstGradeWeight: number;
  secondGrade: number;
  secondGradeWeight: number;
  thirdGrade: number;
  thirdGradeWeight: number;
}

function averageGrade({
  firstGrade,
  firstGradeWeight,
  secondGrade,
  secondGradeWeight,
  thirdGrade,
  thirdGradeWeight,
}: averageGradeProps): string {
  const firstGradeWeighted = firstGrade * firstGradeWeight;
  const secondGradeWeighted = secondGrade * secondGradeWeight;
  const thirdGradeWeighted = thirdGrade * thirdGradeWeight;
  const totalWeight = firstGradeWeight + secondGradeWeight + thirdGradeWeight;
  const average =
    (firstGradeWeighted + secondGradeWeighted + thirdGradeWeighted) /
    totalWeight;

  return `A média ponderada do aluno é: ${average.toFixed(2)}`;
}
