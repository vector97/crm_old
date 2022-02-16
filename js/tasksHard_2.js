'use strict';

console.log('%cДополнительная задача №2', background)

let rent = Number(prompt('Сколько вы заработали за прошедший месяц?'))
let scamPercent
let scamValue

if (rent > 0 && rent <= 15000) {
  rent -= 0
  scamPercent = 0.13
  scamValue = rent * scamPercent
  console.log(`Ваш налог составляет ${scamValue}`)
  console.log('Плоти нологи!!!')
} else if (rent > 15000 && rent <= 50000) {
  rent -= 15000
  scamPercent = 0.2
  scamValue = rent * scamPercent
  console.log(`Ваш налог составляет ${scamValue}`)
  console.log('Плоти нологи!!!')
} else if (rent > 50000) {
  rent -= 50000
  scamPercent = 0.3
  scamValue = rent * scamPercent
  console.log(`Ваш налог составляет ${scamValue}`)
  console.log('Плоти нологи!!!')
}
