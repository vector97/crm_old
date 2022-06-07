'use strict';

console.log('%c Задача №2 на рекурсию', background);

const arr = [];

const acc = (arr) => {
  const randomNumber = Math.ceil(Math.random() * 10);
  arr.push(randomNumber);

  let sum = 0;
  arr.forEach(element => sum += element);

  if (sum > 50) {
    return console.log(arr);
  }

  return acc(arr);
};

acc(arr);
