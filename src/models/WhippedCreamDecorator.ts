// src/models/WhippedCreamDecorator.ts

import { CoffeeDecorator } from "./CoffeeDecorator";
import { Coffee } from "./Coffee"; // Importing Coffee type

export class WhippedCreamDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  cost(): number {
    return this.coffee.cost() + 0.7; // Adding cost for Whipped Cream
  }
}