// src/models/SugarDecorator.ts

import { CoffeeDecorator } from "./CoffeeDecorator";
import { Coffee } from "./Coffee"; // Importing Coffee type

export class SugarDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  cost(): number {
    return this.coffee.cost() + 0.3; // Adding cost for Sugar
  }
}