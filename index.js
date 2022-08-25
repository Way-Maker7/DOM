const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const answer = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  answer.classList.add("show-answer");
  answer.style.background = "red";
});

btn2.addEventListener("click", () => {
  answer.classList.add("show-answer");
  answer.style.background = "green";
});

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1)  translate(-50%, -50%)";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2)  translate(-25%, -25%)";
  mousemove.style.border = "2px solid green";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "grey";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "orange";
});

answer.addEventListener("mouseover", () => {
  answer.style.transform = "rotate(3deg)";
});

const keypressContainer = document.querySelector(".keypress");
console.log(keypressContainer);
const key = document.getElementById("key");

const ring = () => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  if (e.key === "g") {
    keypressContainer.style.background = "green";
  } else if (e.key === "r") {
    keypressContainer.style.background = "red";
  } else if (e.key === "y") {
    keypressContainer.style.background = "yellow";
  } else {
    keypressContainer.style.background = "grey";
  }

  ring();
});
