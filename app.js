"use strict";

// Variables
const body = document.querySelector("body");
const container = document.querySelector(".container");
const flexContainer = document.querySelector(".flex-container");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const a = document.querySelector("a");
const btn = document.querySelectorAll("button");
const img = document.querySelector("img");
const input = document.querySelector("input");

let x = 1;

// Audio Object
const audio = {
  normal: {
    amogus: ["./audio/amogus.mp3", "./audio/amogus1.mp3"],
    angry: [
      "./audio/angry1.mp3",
      "./audio/angry2.mp3",
      "./audio/angry3.mp3",
      "./audio/angry4.mp3",
    ],
    cry: [
      "./audio/cry1.mp3",
      "./audio/cry2.mp3",
      "./audio/cry3.mp3",
      "./audio/cry4.mp3",
    ],
    laugh: ["./audio/laugh1.mp3", "./audio/laugh2.mp3"],
    playAmogus() {
      const { amogus: a } = this;
      const rand = function () {
        return Math.floor(Math.random() * a.length);
      };
      const sound = new Audio(a[rand()]);
      sound.load();
      sound.play();
    },
    playAngry() {
      const { angry: a } = this;
      const rand = function () {
        return Math.floor(Math.random() * a.length);
      };
      const sound = new Audio(a[rand()]);
      sound.load();
      sound.play();
    },
    playCry() {
      const { cry: a } = this;
      const rand = function () {
        return Math.floor(Math.random() * a.length);
      };
      const sound = new Audio(a[rand()]);
      sound.load();
      sound.play();
    },
    playLaugh() {
      const { laugh: a } = this;
      const rand = function () {
        return Math.floor(Math.random() * a.length);
      };
      const sound = new Audio(a[rand()]);
      sound.load();
      sound.play();
    },
  },
  earrape: {
    amogus: ["./audio/earrape/amoguser.mp3", "./audio/earrape/amogus1er.mp3"],
    angry: [
      "./audio/earrape/angry1er.mp3",
      "./audio/earrape/angry2er.mp3",
      "./audio/earrape/angry3er.mp3",
      "./audio/earrape/angry4er.mp3",
    ],
    cry: [
      "./audio/earrape/cry1er.mp3",
      "./audio/earrape/cry2er.mp3",
      "./audio/earrape/cry3er.mp3",
      "./audio/earrape/cry4er.mp3",
    ],
    laugh: ["./audio/earrape/laugh1er.mp3", "./audio/earrape/laugh2er.mp3"],
    playAmogus() {
      const { amogus: a } = this;
      const rand = function () {
        return Math.floor(Math.random() * a.length);
      };
      const sound = new Audio(a[rand()]);
      sound.load();
      sound.play();
    },
    playAngry() {
      const { angry: a } = this;
      const rand = function () {
        return Math.floor(Math.random() * a.length);
      };
      const sound = new Audio(a[rand()]);
      sound.load();
      sound.play();
    },
    playCry() {
      const { cry: a } = this;
      const rand = function () {
        return Math.floor(Math.random() * a.length);
      };
      const sound = new Audio(a[rand()]);
      sound.load();
      sound.play();
    },
    playLaugh() {
      const { laugh: a } = this;
      const rand = function () {
        return Math.floor(Math.random() * a.length);
      };
      const sound = new Audio(a[rand()]);
      sound.load();
      sound.play();
    },
  },
};

// Image Object
const image = {
  amogus: "./img/amogus.png",
  laugh: "./img/king1.png",
  angry: "./img/king3.png",
  cry: "./img/king2.png",
  normal: "./img/king4.png",
};

// Hover Events
btn[0].addEventListener("mouseenter", () => {
  img.src = image.amogus;
});
btn[1].addEventListener("mouseenter", () => {
  img.src = image.laugh;
});
btn[2].addEventListener("mouseenter", () => {
  img.src = image.angry;
});
btn[3].addEventListener("mouseenter", () => {
  img.src = image.cry;
});
box1.addEventListener("mouseleave", () => {
  img.src = image.normal;
});
a.addEventListener("mouseenter", () => {
  img.src = image.normal;
});

// Toggle Earrape
btn[4].addEventListener("click", () => {
  if (x === 1) {
    btn[4].classList.add("active");
    btn[4].innerHTML = "EARRAPE: ON";
    x = x + 1;
  } else if (x === 2) {
    btn[4].classList.remove("active");
    btn[4].innerHTML = "EARRAPE: OFF";
    x = x - 1;
  }
});

// Click Events
btn[0].addEventListener("click", () => {
  if (x === 1) {
    audio.normal.playAmogus();
  } else if (x === 2) {
    audio.earrape.playAmogus();
  }
});
btn[1].addEventListener("click", () => {
  if (x === 1) {
    audio.normal.playLaugh();
  } else if (x === 2) {
    audio.earrape.playLaugh();
  }
});
btn[2].addEventListener("click", () => {
  if (x === 1) {
    audio.normal.playAngry();
  } else if (x === 2) {
    audio.earrape.playAngry();
  }
});
btn[3].addEventListener("click", () => {
  if (x === 1) {
    audio.normal.playCry();
  } else if (x === 2) {
    audio.earrape.playCry();
  }
});
