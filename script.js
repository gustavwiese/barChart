"use strict";

const numberList = [];
const defaultTop = 100;
const defaultHeight = 0;

window.addEventListener("load", start);

function start() {
  setInterval(countList, 1000);
  for (let i = 0; i < 40; i++) createBars(i);
}

function getNumberofCustomers() {
  return Math.floor(Math.random() * 32);
}

function createBars(num) {
  let barElement = /*html*/ `
<div id="bar${num}" class="bar"></div>

`;
  document.querySelector("#ui").insertAdjacentHTML("beforeend", barElement);
}

function countList() {
  const queueSize = getNumberofCustomers();
  numberList.push(queueSize);
  if (numberList.length > 40) {
    numberList.shift();
  }
  styleAllBars();
}


