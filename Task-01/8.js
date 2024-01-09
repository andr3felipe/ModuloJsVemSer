const prompt = require("prompt-sync")({ sigint: true });	

let start = true;

while(start) {
  const firstGrade = Number(getNumber("Insira a primeira nota (P1): "));
  const firstGradeWeight = Number(getNumber("Insira o peso da primeira nota (P1): "));

  const secondGrade = Number(getNumber("Insira a segunda nota (P2): "));
  const secondGradeWeight = Number(getNumber("Insira o peso da segunda nota (P2): "));

  const thirdGrade = Number(getNumber("Insira a terceira nota (P3): "));
  const thirdGradeWeight = Number(getNumber("Insira o peso da terceira nota (P3): "));


  console.log(averageGrade({firstGrade, firstGradeWeight, secondGrade, secondGradeWeight, thirdGrade, thirdGradeWeight}))

  start = prompt("Deseja fazer uma nova comparação? (S/N): ").toUpperCase() === "S" ? true : false;
}


function getNumber(message) {
  let input = prompt(message);

  while(isNaN(input)) {
    console.log("---> Por favor, insira um número válido <---.\n");

    input = prompt(message);
  }

  return input
}

function averageGrade({firstGrade, firstGradeWeight, secondGrade, secondGradeWeight, thirdGrade, thirdGradeWeight}) {
  const firstGradeWeighted = firstGrade * firstGradeWeight;
  const secondGradeWeighted = secondGrade * secondGradeWeight;
  const thirdGradeWeighted = thirdGrade * thirdGradeWeight;
  const totalWeight = firstGradeWeight + secondGradeWeight + thirdGradeWeight;
  const average = (firstGradeWeighted + secondGradeWeighted + thirdGradeWeighted) / totalWeight;

  return `A média ponderada do aluno é: ${average.toFixed(2)}`
}

