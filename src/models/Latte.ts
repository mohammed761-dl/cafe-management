// src/models/Latte.ts

import { Coffee } from "./Coffee";

export class Latte extends Coffee {
  constructor() {
    super("Latte");
  }

  cost(): number {
    return 3.5; // Specific cost for Latte
  }
}
