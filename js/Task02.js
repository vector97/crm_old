"use strict";

console.log("%cЗадача №2", background);

const generator02 = (items, m, n) => {
  const numbers = [];
  numbers.length = items;

  for (let i = 0; i < items; i++) {
    numbers[i] = Math.ceil(Math.random() * (m - n) + n);
  }

  return numbers;
};

console.log(generator02(10, 60, 40));
