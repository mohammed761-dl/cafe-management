"use strict";
// src/models/InventoryManager.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryManager = void 0;
class InventoryManager {
    constructor() {
        this.ingredients = new Map();
    }
    static getInstance() {
        if (!InventoryManager.instance) {
            InventoryManager.instance = new InventoryManager();
        }
        return InventoryManager.instance;
    }
    addIngredient(name, qty) {
        if (this.ingredients.has(name)) {
            this.ingredients.set(name, this.ingredients.get(name) + qty);
        }
        else {
            this.ingredients.set(name, qty);
        }
    }
    useIngredient(name, qty) {
        if (this.ingredients.has(name) && this.ingredients.get(name) >= qty) {
            this.ingredients.set(name, this.ingredients.get(name) - qty);
            return true;
        }
        return false;
    }
}
exports.InventoryManager = InventoryManager;
