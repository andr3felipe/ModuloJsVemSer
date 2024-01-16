const names = [
  "Amanda",
  "Cristina",
  "Bruno",
  "Carla",
  "Daniel",
  "Eduarda",
  "Felipe",
  "Gabriela",
  "Hugo",
  "Isabela",
  "João",
  "Karen",
  "Lucas",
  "Mariana",
  "Nathan",
  "Olivia",
  "Pedro",
  "Quitéria",
  "Rafael",
  "Sofia",
  "Thiago",
  "Úrsula",
  "Valentina",
  "Wagner",
  "Xavier",
  "Yasmin",
  "Zélio",
  "Ana",
  "Breno",
  "Clara",
  "Diego",
  "Evelyn",
  "Fernando",
  "Giovanna",
  "Henrique",
  "Isadora",
  "Júlio",
  "Kamila",
  "Larissa",
  "Matheus",
  "Natália",
  "Otávio",
  "Pamela",
  "Ricardo",
  "Sabrina",
  "Túlio",
  "Vitória",
  "Wesley",
  "Yara",
  "Zara",
];

async function draw(event) {
  event.preventDefault();

  const button = document.getElementById("submit");
  button.innerText = "Sorteando...";
  button.disabled = true;

  const name = event.target["name"].value;
  const velocity = event.target["velocity"].value;
  const time = event.target["time"].value;

  const namesCopy = [...names];

  let nameFound = false;

  names.forEach((currentName) => {
    if (currentName.toLowerCase() === name.toLowerCase()) {
      nameFound = true;
    }
  });

  !nameFound && namesCopy.push(name);

  const container = document.getElementById("result");
  container.innerHTML = "";

  while (namesCopy.length > 1) {
    await new Promise((resolve) => {
      setTimeout(() => {
        const index = Math.floor(Math.random() * namesCopy.length);
        const currentName = namesCopy.splice(index, 1)[0];

        const p = document.createElement("p");
        p.classList.add("text-center");
        p.classList.add("fs-4");

        if (currentName === name) {
          p.classList.add("text-warning");
        } else {
          p.classList.add("text-white");
        }

        p.textContent = currentName;

        container.appendChild(p);

        resolve();
        scrollToBottom();
      }, velocity);
    });
  }

  let countdown = time;
  const counter = document.createElement("p");
  counter.classList.add("text-warning");
  counter.classList.add("text-center");
  container.appendChild(counter);
  scrollToBottom();

  const interval = setInterval(() => {
    counter.innerText = `Sorteando em ${countdown / 1000} segundos...`;
    countdown -= 100;

    if (countdown < 0) {
      clearInterval(interval);

      setTimeout(() => {
        counter.remove();
      }, 500);
    }
  }, 100);

  await new Promise((resolve) => {
    setTimeout(() => {
      const div = document.createElement("div");
      div.classList.add("text-center");
      div.classList.add("fs-4");
      div.innerHTML = `<p class="text-center text-warning"><strong class="text-success">${namesCopy[0]}</strong> foi o(a) sorteado(a)!</p>`;

      container.appendChild(div);

      resolve();
      scrollToBottom();
    }, time);
  });

  button.innerText = "Sortear";
  button.disabled = false;
}

function scrollToBottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
