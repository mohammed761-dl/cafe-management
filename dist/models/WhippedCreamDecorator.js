"use strict";
// src/models/WhippedCreamDecorator.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhippedCreamDecorator = void 0;
const CoffeeDecorator_1 = require("./CoffeeDecorator");
class WhippedCreamDecorator extends CoffeeDecorator_1.CoffeeDecorator {
    constructor(coffee) {
        super(coffee);
    }
    cost() {
        return this.coffee.cost() + 0.7; // Adding cost for Whipped Cream
    }
}
exports.WhippedCreamDecorator = WhippedCreamDecorator;
