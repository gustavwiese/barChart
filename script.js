"use strict";

const numberList = [];
const defaultTop = 100;
const defaultHeight = 0;

window.addEventListener("load", start);

function start() {
  setInterval(countList, 1000);
  for (let i = 0; i < 40; i++) createBars(i);
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function createBars(num) {
  console.log(`createBars`);
  let barElement = /*html*/ `
    <div id="bar${num}" class="bar"></div>
`;
  document.querySelector("#ui").insertAdjacentHTML("beforeend", barElement);
}

function countList() {
  const queueSize = getNumberOfCustomers();
  numberList.push(queueSize);
  if (numberList.length > 40) {
    numberList.shift();
  }
  console.log(numberList);
  styleAllBars();
}

function styleBar(num, newHeight) {
  let bar = document.querySelector("#bar" + num);
  bar.style.height = newHeight * 2 + "%";
  let compensatedTop = defaultTop + defaultHeight - newHeight * 2;
  bar.style.top = compensatedTop + "%";
}

function styleAllBars() {
  for (let i = 0; i < numberList.length; i++) {
    styleBar(i, numberList[i]);
  }
}
