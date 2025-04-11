// src/factory/CoffeeFactory.ts

import { Coffee } from "../models/Coffee";
import { Espresso } from "../models/Espresso";
import { Latte } from "../models/Latte";
import { Cappuccino } from "../models/Cappuccino";

export class CoffeeFactory {
  public static createCoffee(type: string): Coffee {
    switch (type) {
      case "Espresso":
        return new Espresso();
      case "Latte":
        return new Latte();
      case "Cappuccino":
        return new Cappuccino();
      default:
        throw new Error(`Coffee type ${type} not recognized`);
    }
  }
}
