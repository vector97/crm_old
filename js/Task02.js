'use strict';

console.log('%cЗадача №2', background)

const isPrime = (x = Number(prompt('Введите целое положительное число для проверки его на простоту: '))) => {
  let simple = true

  if (x > 0 && Number.isInteger(x)) {
    if (x === 1) {
      simple = false
    }

    for (let i = 2; i < x; i++) {
      if (Number.isInteger(x / i)) {
        simple = false
        break
      }
    }

    console.log(simple)

    if (simple === true) {
      alert(`Число ${x} - простое.`)
    } else {
      alert(`Введённое вами число ${x} не является простым.`)
    }

  } else {
    alert('Вы ввели неверное число!')
    isPrime()
  }
}

isPrime()
