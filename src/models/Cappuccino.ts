// src/models/Cappuccino.ts

import { Coffee } from "./Coffee";

export class Cappuccino extends Coffee {
  constructor() {
    super("Cappuccino");
  }

  cost(): number {
    return 4.0; // Specific cost for Cappuccino
  }
}
