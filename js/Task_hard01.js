'use strict';

console.log('%cДополнительная задача №1', background);

const allCashbox2 = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370],
];

const getAveragePriceGoods = (cashbox) => {
  let amount = 0;
  let sum = 0;
  let mean;

  for (let i = 0; i < cashbox.length; i++) {
    const [amountI, sumI] = cashbox[i];
    amount += amountI
    sum += sumI
  }

  return mean = sum / amount;
};

console.log(Math.floor(getAveragePriceGoods(allCashbox2)));
