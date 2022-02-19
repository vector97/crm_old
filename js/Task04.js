'use strict';

console.log('%cЗадача №4', background)

const calculate = (cost, value, promo) => {
  let costOfValue
  let costOfCost
  let costOfPromo
  let totalCost

  if (value > 10) {
    costOfValue = cost * 0.97
  } else {
    costOfValue = cost
  }

  if (costOfValue > 30000) {
    costOfCost = costOfValue + (costOfValue - 30000) * 0.15
  } else {
    costOfCost = costOfValue
  }

  switch (promo) {
    case "METHED":
      costOfPromo = costOfCost * 0.9
      break
    case "G3H2Z1":
      if (costOfCost > 2000) {
        costOfPromo = costOfCost - 500
      }
      break
    default:
      costOfPromo = costOfCost
  }

  return totalCost = costOfPromo;
}
console.log(calculate(Number(prompt('Введите общую стоимость корзины:')), Number(prompt('Укажите количество товаров в корзине:')), prompt('Введите промокод:')))
