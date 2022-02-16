'use strict';

console.log('%cДополнительная задача №1', background)

const profit = Number(prompt('Сколько вы заработали за прошедший месяц?'))
let taxPercent
let taxValue

if (profit > 0 && profit <= 15000) {
  taxPercent = 0.13
  taxValue = profit * taxPercent
  console.log(`Ваш налог составляет ${taxValue}`)
  console.log('Плоти нологи!!!')
} else if (profit > 15000 && profit <= 50000) {
  taxPercent = 0.2
  taxValue = profit * taxPercent
  console.log(`Ваш налог составляет ${taxValue}`)
  console.log('Плоти нологи!!!')
} else if (profit > 50000) {
  taxPercent = 0.3
  taxValue = profit * taxPercent
  console.log(`Ваш налог составляет ${taxValue}`)
  console.log('Плоти нологи!!!')
} else {
  console.log('А на что вы собсна живёте?')
}
