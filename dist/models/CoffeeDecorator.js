"use strict";
// src/models/CoffeeDecorator.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeDecorator = void 0;
const Coffee_1 = require("./Coffee");
class CoffeeDecorator extends Coffee_1.Coffee {
    constructor(coffee) {
        super(coffee.name);
        this.coffee = coffee;
    }
}
exports.CoffeeDecorator = CoffeeDecorator;
