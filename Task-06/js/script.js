async function draw(event) {
  event.preventDefault();

  const button = document.getElementById("submit");
  button.innerText = "Sorteando...";
  button.disabled = true;

  let names = event.target["names"].value.match(
    /[A-Za-záéíóúâêîôûãÁÉÍÓÚÂÊÎÔÛ\s]+/gi
  );

  names = names.map((name) => name.trim());

  const velocity = event.target["velocity"].value;
  const time = event.target["time"].value;

  const namesCopy = [...names];

  const container = document.getElementById("result");
  container.innerHTML = "";

  while (namesCopy.length > 0) {
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
      }, 100);
    }
  }, 100);

  await new Promise((resolve) => {
    setTimeout(() => {
      const div = document.createElement("div");
      div.classList.add("text-center");
      div.classList.add("fs-4");
      div.innerHTML = `<p class="text-center text-warning"><strong class="text-success">${
        names[Math.floor(Math.random() * names.length)]
      }</strong> foi o(a) sorteado(a)!</p>`;

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
