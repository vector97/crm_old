'use strict';

console.log('%cЗадача №2', background);

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (cashbox) => {
  let sum = 0;
  let mean;

  for (let i = 0; i < cashbox.length; i++) {
    sum += cashbox[i];
  }

  return mean = Math.floor(sum / cashbox.length);
};

console.log(getAverageValue(allCashbox));
