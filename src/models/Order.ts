// src/models/Order.ts

import { Coffee } from "./Coffee";

export class Order {
  public id: string;
  public coffee: Coffee;
  public timestamp: Date;

  constructor(id: string, coffee: Coffee, timestamp: Date) {
    this.id = id;
    this.coffee = coffee;
    this.timestamp = timestamp;
  }

  // Optional method to calculate the total cost of the order
  totalCost(): number {
    return this.coffee.cost();
  }
}
