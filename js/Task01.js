"use strict";

const background = "padding: 0 20px; text-shadow: 0 0 10px red; color: green";
console.log("%cЗадача №1", background);

const generator01 = (items) => {
  const numbers = [];
  numbers.length = items;

  for (let i = 0; i < items; i++) {
    numbers[i] = Math.ceil(Math.random() * 100);
  }

  return numbers;
};

console.log(generator01(10));