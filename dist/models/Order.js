"use strict";
// src/models/Order.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
class Order {
    constructor(id, coffee, timestamp) {
        this.id = id;
        this.coffee = coffee;
        this.timestamp = timestamp;
    }
    // Optional method to calculate the total cost of the order
    totalCost() {
        return this.coffee.cost();
    }
}
exports.Order = Order;
