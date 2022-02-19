'use strict';

console.log('%cЗадача №2', background)

const changeWord = (word) => {
  word = word[0].toUpperCase() + word.toLowerCase().substring(1)
  return word
}
console.log(changeWord(prompt('Введите данные:')))
