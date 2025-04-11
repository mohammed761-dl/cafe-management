// src/models/MilkDecorator.ts

import { CoffeeDecorator } from "./CoffeeDecorator";
import { Coffee } from "./Coffee"; // Importing Coffee type

export class MilkDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  cost(): number {
    return this.coffee.cost() + 0.5; // Adding cost for Milk
  }
}
