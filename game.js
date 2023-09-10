"use strict";

const gameIMG = document.querySelectorAll(".game-img");
const container = document.querySelector(".container");
const gameP = document.querySelector(".game-p");
let score = 0;
gameP.innerHTML = "Score: 0";
let x = 1;

const randX = function () {
  const x = Math.floor(Math.random() * (window.innerWidth - 200));
  return x;
};
const randY = function () {
  const y = Math.floor(Math.random() * (window.innerHeight - 200));
  return y;
};
const randIMG = function () {
  const i = Math.floor(Math.random() * gameIMG.length);
  return i;
};
let currIMG = gameIMG[randIMG()];

const moveIMG = function () {
  currIMG.style.top = `${randY()}px`;
  currIMG.style.right = `${randX()}px`;
  currIMG.style.bottom = `${randY()}px`;
  currIMG.style.left = `${randX()}px`;
};

gameIMG[0].addEventListener("mousedown", () => {
  score = 0;
  gameP.innerHTML = `Score: ${score}`;
});
gameIMG[1].addEventListener("mousedown", () => {
  score = score + 2;
  gameP.innerHTML = `Score: ${score}`;
});
gameIMG[2].addEventListener("mousedown", () => {
  score = score - 2;
  gameP.innerHTML = `Score: ${score}`;
});
gameIMG[3].addEventListener("mousedown", () => {
  score = score - 1;
  gameP.innerHTML = `Score: ${score}`;
});
gameIMG[4].addEventListener("mousedown", () => {
  score = score + 1;
  gameP.innerHTML = `Score: ${score}`;
});

setInterval(() => {
  if (x === 1) {
    currIMG.classList.add("on");
    setInterval(() => {
      moveIMG();
    }, 1000);
    x++;
  } else if (x === 2) {
    currIMG.classList.remove("on");
    setInterval(() => {
      moveIMG();
    }, 1000);
    x--;
    currIMG = gameIMG[randIMG()];
  }
}, 1000);
