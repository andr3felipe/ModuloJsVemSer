// Exercise 1

const listElement = document.getElementById("list");

listElement.addEventListener(
  "input",
  () => (listElement.value = listElement.value.replace(/[^0-9,\s]/g, ""))
);
function orderList(event) {
  event.preventDefault();

  const array = event.target[0].value;
  const filterAndOrderList = array.match(/[0-9]+/gi).sort((a, b) => a - b);

  const element = document.getElementById("ordered-list");

  element.innerHTML = `<span class="text-warning">Lista em ordem crescente:</span> <strong>${filterAndOrderList
    .map((item) => Number(item))
    .join(", ")}</strong>`;
}

// Exercise 2

function evenList(event) {
  event.preventDefault();

  const begin = event.target[0].value;
  const end = event.target[1].value;

  let index = 0;
  let result = ``;

  for (let i = Number(begin); i <= Number(end); i++) {
    if (i % 2 === 0) {
      result += `<p class="text-warning">Os num pares da lista são: <span class="text-white">${i}</span> e possuem o índice <span class="text-white">${index}</span></p>`;
    }
    index++;
  }

  if (result.length < 1) {
    result = `<p class="text-warning">Não há números pares na lista</p>`;
  }

  if (Number(begin) > Number(end)) {
    result = `<p class="text-warning">O valor de Início precisar ser menor que o Fim.</p>`;
  }

  document.getElementById("even-list-result").innerHTML = result;
}

// Exercise 3

let generateList;
const randomNumbers = () => Math.round(Math.random() * 100 + 1);

function listOne() {
  generateList = new Array(8).fill().map(() => randomNumbers());

  document.getElementById(
    "list-1"
  ).innerHTML = `<strong class="text-warning">Lista de valores 1:</strong> ${generateList.join(
    ", "
  )}`;
}

function listTwo() {
  const listTwo = generateList.map((number, index) => {
    if ([0, 2, 5].includes(index)) {
      let newNumber = randomNumbers();

      while (newNumber === number) {
        newNumber = randomNumbers();
      }

      return newNumber;
    }

    return number;
  });

  document.getElementById(
    "list-2"
  ).innerHTML = `<strong class="text-warning">Lista de valores 2:</strong> ${listTwo.join(
    ", "
  )}`;
}

// Exercise 4

function showResources() {
  const ageOfDarkness = {
    gold: 45,
    silver: 56,
    wood: 236,
    stone: 458,
  };

  const ageOfCastles = {
    gold: 345,
    silver: 568,
    wood: 789,
    stone: 897,
  };

  const ENUM = {
    gold: "Ouro",
    silver: "Prata",
    wood: "Madeira",
    stone: "Pedra",
  };

  document.getElementById(
    "age-of-darkness"
  ).innerHTML = `<p class="text-center fw-bold">Objetos do meu inventário - <span class="text-warning">Idade das Trevas</span></p> ${Object.entries(
    ageOfDarkness
  )
    .map(
      ([key, value]) =>
        `<p class="fw-medium text-warning">${ENUM[key]}: <span class="text-white">${value} sacas</span></p>`
    )
    .join("")}`;

  document.getElementById(
    "age-of-castles"
  ).innerHTML = `<p class="text-center fw-bold">Objetos do meu inventário - <span class="text-warning">Idade dos castelos</span> ${Object.entries(
    ageOfCastles
  )
    .map(
      ([key, value]) =>
        `<p class="fw-medium text-warning">${ENUM[key]}: <span class="text-white">${value} sacas</span></p>`
    )
    .join("")}`;

  const ageOfDarknessTotalResources = Object.values(ageOfDarkness).reduce(
    (acc, value) => {
      acc += value;

      return acc;
    },
    0
  );

  const ageOfCastlesTotalResources = Object.values(ageOfCastles).reduce(
    (acc, value) => {
      acc += value;

      return acc;
    },
    0
  );

  document.getElementById(
    "total-resources"
  ).innerHTML = `<p class="text-center fw-bold">Na <span class="text-warning">"Idade das Trevas"</span> o status do meu inventário é:</p> 
  <p class="fw-medium"><span class="text-warning">Total de:</span> 4 <span class="text-warning">tipos de itens com:</span> ${ageOfDarknessTotalResources} sacas.</p>
  <p class="text-center fw-bold mt-5">Na <span class="text-warning">"Idade dos Castelos"</span> o status do meu inventário é:</p> 
  <p class="fw-medium"><span class="text-warning">Total de:</span> 4 <span class="text-warning">tipos de itens com:</span> ${ageOfCastlesTotalResources} sacas.</p>`;
}

// Exercise 5

let cheeseList = ["Mussarela", "Minas", "Parmesão", "Prato", "Gorgonzola"];

function cheeseStart() {
  document.getElementById(
    "cheese-list"
  ).innerHTML = `<p><strong class="text-warning">Cardápio de Queijos:</strong> ${cheeseList.join(
    ", "
  )}.</p>`;

  const button = document.getElementById("cheese-button");
  button.classList.remove("btn-success");
  button.classList.add("btn-warning");
  button.onclick = stepTwo;
  button.innerText = "Passo 2";
}

function renderCheeseList(message, elementId) {
  document.getElementById(
    elementId
  ).innerHTML = `<p><strong class="text-warning">${message}:</strong> ${cheeseList.join(
    ", "
  )}.</p>`;
}

function stepTwo() {
  cheeseList.push("Ricota");
  cheeseList.push("Mascarpone");
  cheeseList.push("Provolone");

  renderCheeseList("Lista atualizada", "step-two");

  document.getElementById("cheese-button").onclick = stepThree;
  document.getElementById("cheese-button").innerText = "Passo 3";
}

function stepThree() {
  cheeseList = cheeseList.sort((a, b) => a.localeCompare(b));

  renderCheeseList(`Lista atualizada em ordem alfabética`, "step-three");

  document.getElementById("cheese-button").onclick = stepFour;
  document.getElementById("cheese-button").innerText = "Passo 4";
}

function stepFour() {
  cheeseList.unshift("Cottage");

  renderCheeseList("Lista atualizada", "step-four");

  const button = document.getElementById("cheese-button");
  button.classList.remove("btn-warning");
  button.classList.add("btn-danger");
  button.innerText = "Reiniciar";
  button.onclick = reStart;
}

function reStart() {
  document.getElementById("cheese-list").innerHTML = "";
  document.getElementById("step-two").innerHTML = "";
  document.getElementById("step-three").innerHTML = "";
  document.getElementById("step-four").innerHTML = "";

  const button = document.getElementById("cheese-button");
  cheeseList = ["Mussarela", "Minas", "Parmesão", "Prato", "Gorgonzola"];
  button.classList.remove("btn-danger");
  button.classList.add("btn-success");
  button.innerText = "Passo 1";
  button.onclick = cheeseStart;
}

// Exercise 6

const books = [
  { id: 1, category: "Terror", title: "It" },
  { id: 2, category: "Terror", title: "O Exorcista" },
  { id: 3, category: "Terror", title: "Drácula" },
  { id: 4, category: "Romance", title: "O Morro Dos Ventos Uivantes" },
  { id: 5, category: "Policial", title: "O Silêncio dos Inocentes" },
  { id: 6, category: "Suspense", title: "Boneco de Neve" },
  { id: 7, category: "Suspense", title: "Bird Box" },
  { id: 8, category: "Romance", title: "Orgulho e Preconceito" },
];

function showBooks() {
  document.getElementById(
    "all-books"
  ).innerHTML = `<p class="fw-medium"><strong class="text-warning">O catálogo de livros da biblioteca é composto por:</strong> ${books
    .map((book) => book.title)
    .join(", ")}.</p>`;

  button = document.getElementById("books-button");
  button.onclick = showHorrorBooks;
  button.classList.remove("btn-success");
  button.classList.add("btn-warning");
  button.innerText = "Filtrar livros de terror";
}

function showHorrorBooks() {
  const horrorBooks = books.filter((book) => book.category === "Terror");

  document.getElementById(
    "horror-books"
  ).innerHTML = `<p class="fw-medium"><strong class="text-warning">Os livros de categoria de Terror da biblioteca, são:</strong> ${horrorBooks
    .map((book) => book.title)
    .join(", ")}.</p>`;

  const button = document.getElementById("books-button");
  button.classList.remove("btn-warning");
  button.classList.add("btn-danger");
  button.onclick = resetBooks;
  button.innerText = "Reiniciar";
}

function resetBooks() {
  document.getElementById("all-books").innerHTML = "";
  document.getElementById("horror-books").innerHTML = "";

  const button = document.getElementById("books-button");
  button.classList.remove("btn-danger");
  button.classList.add("btn-success");
  button.onclick = showBooks;
  button.innerText = "Mostrar livros";
}

// Exercise 7

function rewardMedals() {
  const studentsPositions = [
    {
      name: "João",
      position: 1,
    },
    {
      name: "Maria",
      position: 2,
    },
    {
      name: "Carlos",
      position: 3,
    },
    {
      name: "Vanessa",
      position: 4,
    },
    {
      name: "Bruno",
      position: 5,
    },
  ];

  const medals = ["Ouro", "Prata", "Bronze"];

  const studentsWithMedals = studentsPositions.map((student, index) => {
    const medal = medals[index] ?? "- Sem medalha";

    return {
      ...student,
      medal,
    };
  });

  document.getElementById("rewards").innerHTML = studentsWithMedals
    .map((student) => {
      return `<p class="fw-medium">${student.name} <strong class="text-warning">ficou em <span class="text-white">${student.position}°</span> lugar no campeonato --></strong> Medalha de: ${student.medal}</p>`;
    })
    .join("");
}

// Exercise 8

function teoryOfSets() {
  const A = [2, 4, 6, 7, 8, 22, 45, 34, 89, 75, 62, 54];
  const B = [22, 23, 57, 45, 77, 62, 56, 54, 97, 88, 33, 5];

  const joinAndSort = [...A, ...B].sort((a, b) => a - b);

  const union = joinAndSort
    .filter((item, index) => joinAndSort.indexOf(item) === index)
    .sort((a, b) => a - b);

  const intersection = A.filter((item) => B.includes(item)).sort(
    (a, b) => a - b
  );

  // const notInB = A.filter((item) => !B.includes(item));
  const difference = B.filter((item) => !A.includes(item)).sort(
    (a, b) => a - b
  );

  // const difference = [...notInB, ...notInA].sort((a, b) => a - b);

  document.getElementById(
    "sets"
  ).innerHTML = `<p class="fw-medium"><strong class="text-warning">Conjunto A:</strong> ${A.join(
    ", "
  )}.</p>

  <p class="fw-medium"><strong class="text-warning">Conjunto B:</strong> ${B.join(
    ", "
  )}.</p>

  <p class="fw-medium"><strong class="text-warning">União dos conjuntos:</strong> ${union.join(
    ", "
  )}.</p>

  <p class="fw-medium"><strong class="text-warning">Intersecção dos conjuntos:</strong> ${intersection.join(
    ", "
  )}.</p>
  
  <p class="fw-medium"><strong class="text-warning">Diferença dos conjuntos:</strong> ${difference.join(
    ", "
  )}.</p>`;
}

// Exercise 9

function pizzaOrders() {
  const pizzas = [
    "Pizza Calabresa",
    "Pizza Mafiosa",
    "Pizza Calabresa",
    "Pizza Mussarela",
    "Pizza Quatro Queijos",
    "Pizza Mussarela",
    "Pizza Quatro Queijos",
    "Pizza Quatro Queijos",
  ];

  const orders = [
    {
      name: "Claudino",
      drinks: {
        soda: true,
        juice: false,
        beer: false,
      },
    },
    {
      name: "Maribela",
      drinks: {
        soda: true,
        juice: false,
        beer: false,
      },
    },
    {
      name: "Jacinto",
      drinks: {
        soda: true,
        juice: false,
        beer: false,
      },
    },
    {
      name: "Olimpo",
      drinks: {
        soda: true,
        juice: false,
        beer: false,
      },
    },
    {
      name: "Pafúncio",
      drinks: {
        soda: false,
        juice: true,
        beer: true,
      },
    },
    {
      name: "Felisberta",
      drinks: {
        soda: false,
        juice: true,
        beer: true,
      },
    },
  ];

  document.getElementById(
    "orders"
  ).innerHTML = `<p class="fw-medium"><strong class="text-warning">No dia de hoje os pedidos de pizza foram:</strong> ${pizzas.join(
    ", "
  )}.</p>
  
  <p class="fw-medium"><strong class="text-warning">Os clientes que fizeram pedido com refrigerante foram:</strong> ${orders
    .filter((order) => order.drinks.soda)
    .map((order) => order.name)
    .join(", ")}.</p>

  <p class="fw-medium"><strong class="text-warning">Os clientes que fizeram pedido com suco foram:</strong> ${orders
    .filter((order) => order.drinks.juice)
    .map((order) => order.name)
    .join(", ")}.</p>

  <p class="fw-medium"><strong class="text-warning">Os clientes que fizeram pedido com cerveja foram:</strong> ${orders
    .filter((order) => order.drinks.beer)
    .map((order) => order.name)
    .join(", ")}.</p>`;
}
