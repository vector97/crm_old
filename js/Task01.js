'use strict';

const background = 'padding: 0 20px; text-shadow: 0 0 10px red; color: green'
console.log('%cЗадача №1', background)

const converter = (eur = prompt('Сколько евро у вас есть?')) => {
  const rub = eur * 1.2 * 73 + ' руб'
  return (rub)
}
console.log(converter())
