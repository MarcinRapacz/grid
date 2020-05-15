import "../scss/main.scss";

const divs = document.querySelectorAll("div");

divs.forEach((div) => {
  const randomNumber = Math.floor(Math.random() * 2) + 1;
  const className = `bg${randomNumber}`;
  div.classList.add(className);
});

setInterval(() => {
  const randomNumber = Math.floor(Math.random() * 12);
  const div = divs[randomNumber];
  if (div.className === "bg1") {
    div.classList.add("bg2");
    div.classList.remove("bg1");
  } else {
    div.classList.add("bg1");
    div.classList.remove("bg2");
  }
}, 2000);
