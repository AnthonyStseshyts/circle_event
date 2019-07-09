"use strict";

window.onload = function() {
  const body = document.body;
  const button1 = createElementInDom("button", "Run Bubbles, RUN!");
  const button2 = createElementInDom("button", "STOP!");
  const button3 = createElementInDom("button", "Vanish!");
  body.appendChild(button1);
  body.appendChild(button2);
  body.appendChild(button3);

  button1.addEventListener("click", () => {
    creatingBubbles();
  });

  let timeLabel;

  button2.addEventListener("click", () => {
    clearInterval(timeLabel);
  });

  button3.addEventListener("click", () => {
    killBubbles();
  });

  function creatingBubbles() {
    timeLabel = setInterval(function() {
      const diam = getRandom(50, 100);
      const r = getRandom(0, 255);
      const g = getRandom(0, 255);
      const b = getRandom(0, 255);
      const cY = getRandom(0, document.documentElement.clientHeight);
      const cX = getRandom(0, document.documentElement.clientWidth);
      const bubble = createElementInDom("div", "", "bubbles");

      bubble.style.cssText = `
      width: ${diam}px;
      height: ${diam}px;
      background: rgb(${r},${g},${b});
      top: ${cY}px;
      left: ${cX}px;
      border-radius: 50%;
      position: absolute;
      `;
      body.appendChild(bubble);

      /*       bubble.addEventListener("click", function() {
        removeBubble(this);
      }); */

      bubble.addEventListener("click", e => {
        removeBubble(e.target);
      });
    }, 100);
  }

  createElementInDom();
};

function createElementInDom(name = "div", text = "", classElName = "") {
  const elem = document.createElement(name);
  elem.textContent = text;
  elem.className = classElName;

  return elem;
}

function removeBubble(elem) {
  // elem.remove();
  elem.style.transform = `translate(${getRandom(-100, 400)}px, ${getRandom(
    600,
    -900
  )}px)`;
}

function killBubbles() {
  let b = document.querySelectorAll(".bubbles");

  /*   for (const bubble of b) {
    bubble.remove();
  } */

  /* for (let i = 0; i < b.length; i++) {
    b[i].remove();
  } */

  Array.from(b).forEach(e => e.remove());
}

function getRandom(min, max) {
  return Math.floor(Math.random() * max) + min;
}
