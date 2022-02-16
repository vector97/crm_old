'use strict';

// ----------------------------------------------------------------------

// const name = 'Навигационная система Soundmax'
// const amount = 5
// const category = 'Техника для дома'
// const cost = 100
//
// console.log('name:', name)
//
// const sum = cost * amount
// console.log('sum:', sum)

// ----------------------------------------------------------------------
const background = 'padding: 0 20px; text-shadow: 0 0 10px red; color: green'
console.log('%cЗадача №1', background)

function quiz() {
  const name = prompt('Наименование товара:')
  const amount = Number(prompt('Количество товара:'))
  const category = prompt('Категория товара:')
  const cost = Number(prompt('Цена товара:'))

  if (isFinite(amount) && isFinite(cost)) {
    console.log(`На складе ${amount} единиц товара "${name}" на сумму ${amount * cost} вечнозелёных`)
  } else {
    console.log('Вы ввели некорректные данные!')
  }
}

quiz();

// ----------------------------------------------------------------------
