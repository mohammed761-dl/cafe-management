// src/models/Espresso.ts

import { Coffee } from "./Coffee";

export class Espresso extends Coffee {
  constructor() {
    super("Espresso");
  }

  cost(): number {
    return 2.0; // Specific cost for Espresso
  }
}
