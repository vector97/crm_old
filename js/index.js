'use strict';

const name = 'Навигационная система Soundmax'
const amount = 5
const category = 'Техника для дома'
const cost = 100

console.log('name:', name)

const sum = cost * amount
console.log('sum:', sum)


function quiz() {
  const name = prompt('Наименование товара:')
  const amount = Number(prompt('Количество товара:'))
  const category = prompt('Категория товара:')
  const cost = Number(prompt('Цена товара:'))
  console.log(typeof name)
  console.log(typeof amount)
  console.log(typeof category)
  console.log(typeof cost)

  console.log(`На складе ${amount} единицы товара "${name}" на сумму ${amount * cost} вечнозелёных`)
}

quiz();
