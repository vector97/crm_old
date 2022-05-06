"use strict";

console.log("%cИгра №1", background);

/*

Создайте файл game01.js

Написать простой игровой бот, который умеет следующее:

Загадывает число от 1 до 100;
предлагает пользователю ввести свой вариант отгадки;
если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
если пользователь вводит правильное число, то бот выводит “Правильно!”;
если пользователь ввел не число, то выводит “Введи число!”;
если пользователь нажимает “Отмена”, то игра заканчивается.

*/

const randomNumber = Math.ceil(Math.random() * 100);
console.log("randomNumber: ", randomNumber);

const askNumber = () => {
  let userNumber = prompt("Отгадайте число от 1 до 100", "");

  if (userNumber === null) {
    alert("Конец игры!");
  } else if (userNumber == randomNumber) {
    alert("Правильно!");
  } else if (userNumber > randomNumber) {
    alert("Меньше!");
    askNumber();
  } else if (userNumber < randomNumber) {
    alert("Больше!");
    askNumber();
  } else if (!isFinite(userNumber) || userNumber === "") {
    alert("Введите число!");
    askNumber();
  }
};

askNumber();
