'use strict';

console.log('%cЗадача №3', background)

const reversePhrase = (phrase) => {
  return [...phrase].reverse().join('')
}
console.log(reversePhrase(prompt('Введите данные:')))
