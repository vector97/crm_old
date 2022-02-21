'use strict';

const background = 'padding: 0 20px; text-shadow: 0 0 10px red; color: green'
console.log('%cЗадача №1', background)

const table = prompt('Запустить таблицу умножения? (Y/N)')

switch (table) {
  case 'Y':
    for (let a = 1; a < 11; a++) {
      console.log('---------')

      for (let m = 1; m < 11; m++) {
        console.log(`${a} ^ ${m} = ${a ** m}`)
      }
    }
    break
  case 'N':
    alert('Переходим к следующему заданию')
    break
  default:
    alert('Переходим к следующему заданию')
}
