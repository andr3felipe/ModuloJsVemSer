const prompt = require("prompt-sync")({ sigint: true });	

let start = true;

while(start) {
  const firstPersonName = getName("Insira o nome da primeira pessoa: \n");
  const firstPersonAge = getAge("Insira a idade da primeira pessoa: \n");

  const secondPersonName = getName("Insira o nome da segunda pessoa: \n");
  const secondPersonAge = getAge("Insira a idade da segunda pessoa: \n");

  console.log(calculateDifferenceInAge({firstPersonName, firstPersonAge}, {secondPersonName, secondPersonAge}));

  start = prompt("\nDeseja fazer uma nova comparação? (S/N): ").toUpperCase() === "S" ? true : false;
}


function getAge(message) {
  let input = prompt(message);

  while(parseInt(input) !== Number(input)) {
    console.log("---> Por favor, insira um número válido <---.\n");

    input = prompt(message);
  }

  return input
}

function getName(message) {
  let input = prompt(message);
  const regex = /[a-z\s]/gi

  while(typeof input !== "string" || !regex.test(input)) {
    console.log("---> Por favor, insira um nome válido. <---\n");

    input = prompt(message);
  }

  return input
}

function calculateDifferenceInAge({firstPersonName, firstPersonAge}, {secondPersonName, secondPersonAge}) {
    if (Number(firstPersonAge) > Number(secondPersonAge)) {
        return `A primeira pessoa (${firstPersonName}) é mais velha que a segunda por ${firstPersonAge - secondPersonAge} ano(s).`;
    } else if (Number(firstPersonAge) < Number(secondPersonAge)) {
        return `A segunda pessoa (${secondPersonName}) é mais velha que a primeira por ${secondPersonAge - firstPersonAge} ano(s).`;
    } else {
        return `Ambas as pessoas (${firstPersonName} e ${secondPersonName}) têm a mesma idade.`;
    
    }
}

