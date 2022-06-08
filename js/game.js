'use strict';

const background = 'padding: 0 20px; text-shadow: 0 0 10px red; color: green';
console.log('%c Задача №1 на рекурсию Угадай число', background);

const min = prompt('Введите минимальное целое число', '');
const max = prompt('Введите максимальное целое число', '');
let attempt = Math.ceil((max - min) * 0.3);
const randomNumber = Math.ceil(Math.random() * (+max - +min + 1)) + +min;
console.log('randomNumber: ', randomNumber);
const userNums = [];

const askNumber = () => {
  while (attempt > 0) {
    const userNumber =
      prompt(`Отгадайте число в диапазоне от ${min} до ${max}
      за ${attempt} попыток`, '');

    if (!userNums.includes(userNumber) && isFinite(userNumber)) {
      userNums.push(userNumber);
      attempt--;
    } else {
      alert('Это число вы уже вводили!');
      return askNumber();
    }

    console.log('userNums: ', userNums);

    if (userNumber === null) {
      alert('Конец игры!');
      return;
    }

    if (+userNumber === randomNumber) {
      alert('Правильно!');
      return;
    }

    if (userNumber > randomNumber) {
      alert('Меньше!');
      return askNumber();
    }

    if (userNumber < randomNumber) {
      alert('Больше!');
      return askNumber();
    }

    if (!isFinite(userNumber) || userNumber === '') {
      alert('Введите число!');
      return askNumber();
    }
  }

  alert(`У вас закончились попытки! К сожалению, вы проиграли.
    Правильное число ${randomNumber}`);
};

if (min === null || max === null) {
  alert('Конец игры!');
} else {
  askNumber();
}
