'use strict';

const background = 'padding: 0 20px; text-shadow: 0 0 10px red; color: green';
console.log('%c Задача №1 на рекурсию Угадай число', background);

const randomNumber = Math.ceil(Math.random() * 100);
console.log('randomNumber: ', randomNumber);

const askNumber = () => {
  const userNumber = prompt('Отгадайте число от 1 до 100', '');

  if (userNumber === null) {
    alert('Конец игры!');
  } else if (+userNumber === randomNumber) {
    alert('Правильно!');
  } else if (userNumber > randomNumber) {
    alert('Меньше!');
    askNumber();
  } else if (userNumber < randomNumber) {
    alert('Больше!');
    askNumber();
  } else if (!isFinite(userNumber) || userNumber === '') {
    alert('Введите число!');
    askNumber();
  }
  console.log(userNumber);
};

askNumber();
