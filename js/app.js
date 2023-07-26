'use strict';

void (function () {
  class Hamburger {
    static SIZE_SMALL = {
      price: 50,
      calories: 20,
    };

    static SIZE_LARGE = {
      price: 100,
      calories: 40,
    };

    static STUFFING_CHEESE = {
      price: 10,
      calories: 20,
    };

    static STUFFING_SALAD = {
      price: 20,
      calories: 5,
    };

    static STUFFING_POTATO = {
      price: 15,
      calories: 10,
    };

    static TOPPING_MAYO = {
      price: 20,
      calories: 5,
    };

    static TOPPING_SAUCE = {
      price: 15,
      calories: 0,
    };

    constructor(size, stuffing) {
      this.size = size;
      this.stuffing = stuffing;
      this.toppings = new Set();
    }

    addTopping(topping) {
      this.toppings.add(topping);
    }

    calculatePrice() {
      let totalPrice = this.size.price + this.stuffing.price;

      if (this.toppings.size > 0) {
        this.toppings.forEach(({ price }) => totalPrice += price);
      }

      return totalPrice;
    }

    calculateCalories() {
      let totalCalories = this.size.calories + this.stuffing.calories;

      if (this.toppings.size > 0) {
        this.toppings.forEach(({ calories }) => totalCalories += calories);
      }

      return totalCalories;
    }
  }

  const hamburger = new Hamburger(
    Hamburger.SIZE_SMALL,
    Hamburger.STUFFING_CHEESE,
  );

  hamburger.addTopping(Hamburger.TOPPING_MAYO);

  console.log('Calories: ' + hamburger.calculateCalories());
  console.log('Price: ' + hamburger.calculatePrice());

  hamburger.addTopping(Hamburger.TOPPING_SAUCE);

  console.log('Price with sauce: ' + hamburger.calculatePrice());
})();
