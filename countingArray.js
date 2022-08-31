"use strict";

window.addEventListener("load", init);

let i = -1;
const newArray = [];
let counter;

function init() {
  if (i < 10000) {
    counter = i + 1;
  }
  i++;
  setTimeout(init, 1000);
  newArray.unshift(counter);
  console.log(newArray);
  newArray.length = 8;
}
