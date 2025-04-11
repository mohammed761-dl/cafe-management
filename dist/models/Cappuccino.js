"use strict";
// src/models/Cappuccino.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cappuccino = void 0;
const Coffee_1 = require("./Coffee");
class Cappuccino extends Coffee_1.Coffee {
    constructor() {
        super("Cappuccino");
    }
    cost() {
        return 4.0; // Specific cost for Cappuccino
    }
}
exports.Cappuccino = Cappuccino;
