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
      const computerMove = getFigure(lang)[getRandomIntInclusive(0, lang.length - 1)];

      let playerMove;
      if (lang === FIGURES_ENG) {
        playerMove = prompt('Rock, scissors or paper?');
      } else {
        playerMove = prompt('Камень, ножницы или бумага?');
      }

      if (playerMove === null) {
        let exitGame;
        language === 'EN' || language === 'ENG' ?
          exitGame = confirm('Do you really want to leave the game?') :
          exitGame = confirm('Вы действительно хотите покинуть игру?');

        if (exitGame) {
          language === 'EN' || language === 'ENG' ?
            alert(`
              End of the game!
              PC: ${result.computer}
              Player: ${result.player}
            `) :
            alert(`
              Конец игры!
              Компьютер: ${result.computer}
              Игрок: ${result.player}
            `);
        } else {
          language === 'EN' || language === 'ENG' ?
            alert(`
              We continue the game!
              PC: ${result.computer}
              Player: ${result.player}
            `) :
            alert(`
              Продолжаем игру!
              Компьютер: ${result.computer}
              Игрок: ${result.player}
            `);
          start();
        }
      } else if (playerMove[0] === computerMove[0]) {
        language === 'EN' || language === 'ENG' ?
          alert(
            `Draw!
            PC: ${result.computer}
            Player: ${result.player}`
          ) :
          alert(
            `Ничья!
            Компьютер: ${result.computer}
            Игрок: ${result.player}`
          );

        start();
      } else if (playerMove[0] === getFigure(lang)[0][0]) {
        if (computerMove === getFigure(lang)[1]) {
          result.player += 1;

          language === 'EN' || language === 'ENG' ?
            alert(
              `WIN!
              PC: ${result.computer}
              Player: ${result.player}`
            ) :
            alert(
              `Вы выиграли!
              Компьютер: ${result.computer}
              Игрок: ${result.player}`
            );

          start();
        } else {
          result.computer += 1;

          language === 'EN' || language === 'ENG' ?
            alert(
              `LOSS!
              PC: ${result.computer}
              Player: ${result.player}`
            ) :
            alert(
              `Вы проиграли!
              Компьютер: ${result.computer}
              Игрок: ${result.player}`
            );

          start();
        }
      } else if (playerMove[0] === getFigure(lang)[1][0]) {
        if (computerMove === getFigure(lang)[0]) {
          result.computer += 1;

          language === 'EN' || language === 'ENG' ?
            alert(
              `LOSS!
              PC: ${result.computer}
              Player: ${result.player}`
            ) :
            alert(
              `Вы проиграли!
              Компьютер: ${result.computer}
              Игрок: ${result.player}`
            );

          start();
        } else {
          result.player += 1;

          language === 'EN' || language === 'ENG' ?
            alert(
              `WIN!
              PC: ${result.computer}
              Player: ${result.player}`
            ) :
            alert(
              `Вы победили!
              Компьютер: ${result.computer}
              Игрок: ${result.player}`
            );

          start();
        }
      } else if (playerMove[0] === getFigure(lang)[2][0]) {
        if (computerMove === getFigure(lang)[1]) {
          result.computer += 1;

          language === 'EN' || language === 'ENG' ?
            alert(
              `LOSS!
              PC: ${result.computer}
              Player: ${result.player}`
            ) :
            alert(
              `Вы проиграли!
              Компьютер: ${result.computer}
              Игрок: ${result.player}`
            );

          start();
        } else {
          result.player += 1;

          language === 'EN' || language === 'ENG' ?
            alert(
              `WIN!
              PC: ${result.computer}
              Player: ${result.player}`
            ) :
            alert(
              `Вы победили!
              Компьютер: ${result.computer}
              Игрок: ${result.player}`
            );

          start();
        }
      } else {
        start();
      }
    };
  };

  window.RPS = game;
})();
