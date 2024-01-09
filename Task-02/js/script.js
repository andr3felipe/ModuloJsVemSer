function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// EXERCISE - 1

const phrases = [
  "Enfrente os problemas e leve a melhor!",
  "Os presentes de cada dia",
  "Dê mais atenção ao que você tem de bom na sua vida",
  "Um passo por dia",
  "Para chegar ao topo, o que importa é começar!",
  "De nada adianta ter sonhos, se você não se empenhar em correr atrás",
];

function getRandomPhrase() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
}

function changeText() {
  const element = document.getElementById("exercise-1");
  const currentText = element.innerText;
  let newText = getRandomPhrase();

  while (newText === currentText) {
    newText = getRandomPhrase();
  }

  element.innerText = newText;
}

function reloadPage() {
  location.reload();
}

// EXERCISE - 2

const colorPicker = document.getElementById("exercise-2-input");

colorPicker.addEventListener("input", function () {
  const text = document.getElementById("exercise-2-text");
  text.style.color = colorPicker.value;
});

// EXERCISE - 3

function incrementCounter() {
  const counter = document.getElementById("exercise-3-counter");
  counter.innerText = Number(counter.innerText) + 1;
}

function resetCounter() {
  const counter = document.getElementById("exercise-3-counter");
  counter.innerText = 0;
}

// EXERCISE - 4

function grayScale() {
  const image = document.getElementById("exercise-4-image");
  image.style.filter = "grayscale(100%)";
}

function contrast() {
  const image = document.getElementById("exercise-4-image");
  image.style.filter = "contrast(200%)";
}

function removeFilters() {
  const image = document.getElementById("exercise-4-image");
  image.style.filter = "none";
}

// EXERCISE - 5

function simpleCalculator(event) {
  event.preventDefault();
  const simpleCalculatorForm = document.getElementById("exercise-5-form");
  const result = document.getElementById("exercise-5-result");

  const firstNumber = Number(
    simpleCalculatorForm["exercise-5-first-number"].value
  );
  const secondNumber = Number(
    simpleCalculatorForm["exercise-5-second-number"].value
  );
  const operator = simpleCalculatorForm["exercise-5-select"].value;

  if (operator === "+") {
    return (result.placeholder = firstNumber + secondNumber);
  }

  if (operator === "-") {
    return (result.placeholder = firstNumber - secondNumber);
  }

  if (operator === "*") {
    return (result.placeholder = firstNumber * secondNumber);
  }

  if (operator === "/") {
    return (result.placeholder = firstNumber / secondNumber);
  }
}

function simpleCalculatorReset() {
  document.getElementById("exercise-5-result").placeholder = 0;
}
