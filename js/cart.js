'use strict';

console.log('%c Задача №2 на this Корзина', background);

const cart = {
  items: [],
  count: 0,
  discount: 0,
  get totalPrice() {
    let itemPrice = 0;
    let itemCount = 0;
    let totalPrice = 0;

    this.items.forEach((item) => {
      itemPrice = item.itemPrice;
      itemCount = item.itemCount;
      totalPrice +=
        this.calculateItemPrice(itemPrice, itemCount, this.discount);
    });

    return totalPrice;
  },
  set setDiscount(promocode) {
    if (typeof promocode === 'string') {
      switch (promocode) {
        case 'METHED':
          this.discount = 15;
          break;
        case 'NEWYEAR':
          this.discount = 21;
          break;
        default:
          this.discount = 0;
          break;
      }
    }
  },
  add(itemName, itemPrice, itemCount = 1) {
    this.items.push({
      itemName,
      itemPrice,
      itemCount,
    });
    this.increaseCount(itemCount);
  },
  increaseCount(itemCount) {
    this.count += itemCount;
  },
  calculateItemPrice(itemPrice, itemCount, discount) {
    return (itemPrice * itemCount) - (itemPrice * itemCount * discount / 100);
  },
  clear() {
    this.items = [];
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log(this.totalPrice);
  },
};

cart.add('Шапка', 900, 2);
cart.add('Шарф', 300, 2);
cart.add('Варежки', 500, 4);
cart.add('Куртка', 2000, 2);

cart.setDiscount = 'METHED';

cart.print();
