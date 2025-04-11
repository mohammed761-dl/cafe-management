"use strict";
// src/models/Latte.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Latte = void 0;
const Coffee_1 = require("./Coffee");
class Latte extends Coffee_1.Coffee {
    constructor() {
        super("Latte");
    }
    cost() {
        return 3.5; // Specific cost for Latte
    }
}
exports.Latte = Latte;
