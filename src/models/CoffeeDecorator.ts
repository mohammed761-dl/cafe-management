// src/models/CoffeeDecorator.ts

import { Coffee } from "./Coffee";

export abstract class CoffeeDecorator extends Coffee {
  public coffee: Coffee;

  constructor(coffee: Coffee) {
    super(coffee.name);
    this.coffee = coffee;
  }

  abstract cost(): number;
}
