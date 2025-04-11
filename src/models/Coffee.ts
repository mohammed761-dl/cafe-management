// src/models/Coffee.ts

export abstract class Coffee {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract cost(): number;
}
