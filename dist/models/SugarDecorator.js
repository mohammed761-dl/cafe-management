"use strict";
// src/models/SugarDecorator.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.SugarDecorator = void 0;
const CoffeeDecorator_1 = require("./CoffeeDecorator");
class SugarDecorator extends CoffeeDecorator_1.CoffeeDecorator {
    constructor(coffee) {
        super(coffee);
    }
    cost() {
        return this.coffee.cost() + 0.3; // Adding cost for Sugar
    }
}
exports.SugarDecorator = SugarDecorator;
