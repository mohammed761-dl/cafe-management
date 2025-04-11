"use strict";
// src/factory/CoffeeFactory.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeFactory = void 0;
const Espresso_1 = require("../models/Espresso");
const Latte_1 = require("../models/Latte");
const Cappuccino_1 = require("../models/Cappuccino");
class CoffeeFactory {
    static createCoffee(type) {
        switch (type) {
            case "Espresso":
                return new Espresso_1.Espresso();
            case "Latte":
                return new Latte_1.Latte();
            case "Cappuccino":
                return new Cappuccino_1.Cappuccino();
            default:
                throw new Error(`Coffee type ${type} not recognized`);
        }
    }
}
exports.CoffeeFactory = CoffeeFactory;
