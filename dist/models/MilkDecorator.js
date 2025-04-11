"use strict";
// src/models/MilkDecorator.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.MilkDecorator = void 0;
const CoffeeDecorator_1 = require("./CoffeeDecorator");
class MilkDecorator extends CoffeeDecorator_1.CoffeeDecorator {
    constructor(coffee) {
        super(coffee);
    }
    cost() {
        return this.coffee.cost() + 0.5; // Adding cost for Milk
    }
}
exports.MilkDecorator = MilkDecorator;
