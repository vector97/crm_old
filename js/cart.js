"use strict";

const background = "padding: 0 20px; text-shadow: 0 0 10px red; color: green";
console.log("%cЗадача №1", background);

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice;
  },
  add(itemName, itemPrice, itemCount = 1) {
    this.items.push({
      itemName,
      itemPrice,
      itemCount,
    });
    this.increaseCount(itemCount);
    this.calculateItemPrice(itemPrice, itemCount);
  },
  increaseCount(itemCount) {
    this.count += itemCount;
  },
  calculateItemPrice(itemPrice, itemCount) {
    this.totalPrice += itemPrice * itemCount;
  },
  clear() {
    this.items = [];
    this.count = 0;
    this.totalPrice = 0;
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