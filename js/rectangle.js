'use strict';

console.log('%c Задача №1 на this', background);

const rectangle = {
  width: 5,
  height: 5,
  get perimeter() {
    return `Периметр: ${(this.width + this.height) * 2}см`;
  },
  get square() {
    return `Площадь: ${(this.width * this.height)}см^2`;
  },
  set widthValue(value) {
    if (typeof value === 'number') {
      this.width = value;
    }
  },
  set heightValue(value) {
    if (typeof value === 'number') {
      this.height = value;
    }
  },
};

console.log(rectangle);
console.log(rectangle.perimeter);
console.log(rectangle.square);

rectangle.widthValue = 25;
rectangle.heightValue = 30;

console.log(rectangle);
console.log(rectangle.perimeter);
console.log(rectangle.square);
