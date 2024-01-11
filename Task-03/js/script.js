// Exercise 1

function calculateAverageGrade(event) {
  event.preventDefault();

  const grade1 = parseInt(document.getElementById("grade-1").value);
  const grade2 = parseInt(document.getElementById("grade-2").value);
  const grade3 = parseInt(document.getElementById("grade-3").value);

  if (isNaN(grade1) || isNaN(grade2) || isNaN(grade3)) {
    return (document.getElementById("average-grade").innerHTML =
      "Por favor, insira as 3 notas.");
  }

  const average = (grade1 + grade2 + grade3) / 3;

  let message = `Sua média é ${average.toFixed(1)}.<br /> `;

  if (average < 5) {
    return (document.getElementById("average-grade").innerHTML =
      message + "Você está de recuperação.");
  }

  if (average >= 5) {
    return (document.getElementById("average-grade").innerHTML =
      message + "Você foi aprovado.");
  }
}

// Exercise 2

function calculateSumOfEvenNumbers(range, id) {
  let result = 0;
  for (let i = 1; i <= range; i++) {
    if (i % 2 === 0) {
      result += i;
    }
  }

  document.getElementById(id).innerHTML = "A soma dá: " + result;
}

// Exercise 3

const timer = document.getElementById("timer");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    timer.innerHTML = new Date().toLocaleTimeString();
  }, 1000);
});

// Exercise 4

function checkIn() {
  let start = true;

  while (start) {
    const choice = prompt(
      "Bem-vindo ao Hotel Devs.\n\n1) Fazer check-in\n2) Fazer check-out\n3) Estender hospedagem\n4) Sair"
    );

    if (choice === null || choice === "4") {
      start = false;
      return alert("Saindo do menu.");
    }

    if (!["1", "2", "3", "4"].includes(choice)) {
      alert("Opção inválida!");
    }

    if (choice === "1") {
      alert("Check-in realizado com sucesso, seja bem-vindo!");
      return (start = false);
    }

    if (choice === "2") {
      const doubleCheck = confirm("Você tem certeza ?");

      if (doubleCheck) {
        return alert("Check-out realizado com sucesso, até mais.");
      }
    }

    if (choice === "3") {
      const extendDays = prompt(
        "Por quanto dias gostaria de estender a hospedagem ?"
      );

      if (isNaN(extendDays) || parseInt(extendDays) != extendDays) {
        alert("Número de dias inválido.");
      } else {
        alert(
          `Hospedagem estendida por ${extendDays} dias. Obrigado pela preferência.`
        );
        return (start = false);
      }
    }
  }
}

// Exercise 5

function carbonTest() {
  const carbon1 = prompt(
    "Digite a quantidade de carbono da primeira substância:"
  );

  if (isNaN(carbon1)) {
    return alert("Quantidade de carbono inválida.");
  }

  const carbon2 = prompt(
    "Digite a quantidade de carbono da segunda substância:"
  );

  if (isNaN(carbon2)) {
    return alert("Quantidade de carbono inválida.");
  }

  if (Number(carbon1) === Number(carbon2) + 2) {
    return alert("Quantidade igual.");
  } else {
    return alert("Quantidade diferente.");
  }
}

// Exercise 6
function showEvenNumbers() {
  let evenNumbers = "";

  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      evenNumbers += i < 100 ? `${i}, ` : `${i}`;
    }
  }

  document.getElementById("showEvenNumbers").innerText = `"${evenNumbers}"`;
}

// Exercise 7

function age() {
  let start = true;
  let age;

  while (start) {
    age = prompt("Digite sua idade:");

    if (!isNaN(age)) {
      start = false;
    }

    if (age === null) {
      return (start = false);
    }

    if (isNaN(age) || parseInt(age) != age) {
      alert("Idade inválida.");
    }
  }

  alert(`Sua idade é ${age} anos.`);
}

// Exercise 8

function showSalaryRise() {
  const hiredIn = 2014;
  const currentYear = new Date().getFullYear();
  const initialSalary = 800;
  let salary = initialSalary;
  let risePercent = 1.5 / 100;

  const element = document.getElementById("salary");

  element.innerHTML += `<p><strong>Ano de contratação:</strong> ${hiredIn}<br />
   <strong>Salário:</strong> R$${salary.toFixed(2)}</p>`;

  for (let year = hiredIn + 1; year <= currentYear; year++) {
    if (year >= 2023) {
      risePercent *= 2;
    }

    salary += salary * risePercent;

    element.innerHTML += `<p><strong>Ano</strong>: ${year}<br /> 
      <strong>Percentual de aumento:</strong>
      ${risePercent * 100}%<br /> 
      <strong>Salário:</strong> R$${salary.toFixed(2)}</p>`;
  }

  const riseTotalPercent = ((salary - initialSalary) / initialSalary) * 100;
  element.innerHTML += `<p class="fw-bold">Em comparação ao seu salário inicial, você teve aumento de ${riseTotalPercent.toFixed(
    2
  )}%</p>`;
}

// Exercise 9

function fibonacci(counter) {
  const fibonacci = document.getElementById("fibonacci");
  let result = "";

  let num1 = 0;
  let num2 = 1;
  let hold;

  while (counter > 1) {
    hold = num1 + num2;
    num1 = num2;
    num2 = hold;
    counter--;

    result += counter > 1 ? `${num1}, ` : `${num1}`;
  }

  fibonacci.innerText = `"${result}"`;
}
