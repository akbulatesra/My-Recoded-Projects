// Write your code here
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}
class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.drink = drink;
    this.soup = soup;
  }
}
class Dinner {
  #dessert;
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.#dessert = dessert;
    this.soup = soup;
    this.entree = entree;
  }
}
