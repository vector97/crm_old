"use strict";

console.log("%cЗадача №3", background);

const generator03 = (items, m, n, str) => {
  const numbers = [];
  numbers.length = items;

  for (let i = 0; i < items; i++) {
    numbers[i] = Math.ceil(Math.random() * (m - n) + n);
  }

  const filterNumbers = (arr) => {
    switch (str) {
      case "even":
        return arr.filter((item) => {
          return !(item % 2);
        });
      case "odd":
        return arr.filter((item) => {
          return item % 2;
        });
      default:
        return arr;
    }
  };

  return filterNumbers(numbers);
};

console.log(generator03(10, 60, 40, "even"));
