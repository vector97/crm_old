"use strict";

const background = "padding: 0 20px; text-shadow: 0 0 10px red; color: green";
console.log("%cЗадача №1", background);

const cart = {
  items: [],
  count: 0,
  get totalPrice() {
    let itemPrice = 0;
    let itemCount = 0;
    let totalPrice = 0;

    this.items.forEach((item) => {
      itemPrice = item.itemPrice;
      itemCount = item.itemCount;
      totalPrice += this.calculateItemPrice(itemPrice, itemCount);
    });

    return totalPrice;
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
  calculateItemPrice(itemPrice, itemCount) {
    return itemPrice * itemCount;
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

cart.add("Шапка", 900, 2);
cart.add("Шарф", 300, 2);
cart.add("Варежки", 500, 4);
cart.add("Куртка", 2000, 2);

cart.print();
