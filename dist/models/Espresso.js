"use strict";
// src/models/Espresso.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Espresso = void 0;
const Coffee_1 = require("./Coffee");
class Espresso extends Coffee_1.Coffee {
    constructor() {
        super("Espresso");
    }
    cost() {
        return 2.0; // Specific cost for Espresso
    }
}
exports.Espresso = Espresso;
