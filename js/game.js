'use strict';

const background = 'padding: 0 20px; text-shadow: 0 0 10px red; color: green';
console.log('%c Игра Камень, ножницы, бумага', background);

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const getFigure = (lang) => {
    const FIGURES = lang;

    return FIGURES;
  }

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang = language === 'EN' || language === 'ENG' ? FIGURES_ENG : FIGURES_RUS;

    return function start() {
      const localization = language === 'EN' || language === 'ENG' ? {
          startGame: 'Rock, scissors or paper?',
          exitGame: 'Do you really want to leave the game?',
          gameOver: 'End of the game!',
          continueGame: 'We continue the game!',
          draw: 'Draw!',
          win: 'WIN!',
          loss: 'LOSS!',
          resultGame: `Player : PC`,
        } :
        {
          startGame: 'Камень, ножницы или бумага?',
          exitGame: 'Вы действительно хотите покинуть игру?',
          gameOver: 'Конец игры!',
          continueGame: 'Продолжаем игру!',
          draw: 'Ничья!',
          win: 'Вы выиграли!',
          loss: 'Вы проиграли!',
          resultGame: `Игрок : Компьютер`,
        };

      const computerMove = getFigure(lang)[getRandomIntInclusive(0, lang.length - 1)];
      const playerMove = prompt(localization.startGame);

      const winGame = () => {
        return ((playerMove[0] === getFigure(lang)[0][0]) && (computerMove === getFigure(lang)[1])) ||
        ((playerMove[0] === getFigure(lang)[1][0]) && (computerMove === getFigure(lang)[2])) ||
        ((playerMove[0] === getFigure(lang)[2][0]) && (computerMove === getFigure(lang)[0]));
      };
      const lossGame = () => {
        return ((computerMove === getFigure(lang)[0]) && (playerMove[0] === getFigure(lang)[1][0])) ||
          ((computerMove === getFigure(lang)[1]) && (playerMove[0] === getFigure(lang)[2][0])) ||
          ((computerMove === getFigure(lang)[2]) && (playerMove[0] === getFigure(lang)[0][0]));
      };

      if (playerMove === null) {
        let exitGame = confirm(localization.exitGame);

        if (exitGame) {
          alert(`${localization.gameOver}
              ${localization.resultGame}
              ${result.player} : ${result.computer}`);
        } else {
          alert(`${localization.continueGame}
                ${localization.resultGame}
                ${result.player} : ${result.computer}`);
          start();
        }
      } else if (playerMove[0] === computerMove[0]) {
          alert(`${localization.draw}
                ${localization.resultGame}
                ${result.player} : ${result.computer}`);
        start();
      } else if (winGame()) {
        result.player++;
        alert(`${localization.win}
              ${localization.resultGame}
              ${result.player} : ${result.computer}`);
        start();
      } else if (lossGame()) {
        result.computer++;
        alert(`${localization.loss}
              ${localization.resultGame}
              ${result.player} : ${result.computer}`);
        start();
      } else {
        start();
      }
    };
  };

  window.RPS = game;
})();
