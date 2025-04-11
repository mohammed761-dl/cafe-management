"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CoffeeFactory_1 = require("./factory/CoffeeFactory");
const MilkDecorator_1 = require("./models/MilkDecorator");
const SugarDecorator_1 = require("./models/SugarDecorator");
const WhippedCreamDecorator_1 = require("./models/WhippedCreamDecorator");
const Order_1 = require("./models/Order");
const InventoryManager_1 = require("./models/InventoryManager");
// -------------------- Singleton Pattern --------------------
// Let's create the inventory manager singleton
const inventoryManager1 = InventoryManager_1.InventoryManager.getInstance();
const inventoryManager2 = InventoryManager_1.InventoryManager.getInstance();
// Test Singleton pattern by checking if both instances are the same
if (inventoryManager1 === inventoryManager2) {
    console.log("Singleton pattern works! Both instances are the same.");
}
else {
    console.log("Singleton pattern does NOT work! Instances are different.");
}
// -------------------- Factory Pattern --------------------
// Create coffee using Factory pattern
const coffee1 = CoffeeFactory_1.CoffeeFactory.createCoffee("Espresso");
const coffee2 = CoffeeFactory_1.CoffeeFactory.createCoffee("Latte");
// Test Factory pattern by checking if the coffee objects are created correctly
if (coffee1 && coffee2) {
    console.log("Factory pattern works! Coffees created successfully.");
}
else {
    console.log("Factory pattern does NOT work! Coffee creation failed.");
}
// -------------------- Decorator Pattern --------------------
// Add customizations to coffee using Decorators
const coffeeWithMilk = new MilkDecorator_1.MilkDecorator(coffee1);
const coffeeWithMilkAndSugar = new SugarDecorator_1.SugarDecorator(coffeeWithMilk);
const coffeeWithMilkSugarAndCream = new WhippedCreamDecorator_1.WhippedCreamDecorator(coffeeWithMilkAndSugar);
// Test Decorator pattern by checking if the cost changes correctly
console.log(`Created a coffee: ${coffee1.name}, Cost: $${coffee1.cost()}`);
console.log(`Added milk to Espresso, New Cost: $${coffeeWithMilk.cost()}`);
console.log(`Added sugar to Espresso with milk, New Cost: $${coffeeWithMilkAndSugar.cost()}`);
console.log(`Added whipped cream to Espresso with milk and sugar, New Cost: $${coffeeWithMilkSugarAndCream.cost()}`);
// -------------------- Inventory Management --------------------
// Add some ingredients to the inventory
inventoryManager1.addIngredient("milk", 200);
inventoryManager1.addIngredient("sugar", 100);
inventoryManager1.addIngredient("whippedCream", 50);
// Verify if the ingredients are added correctly
console.log("Inventory after adding ingredients:");
console.log(inventoryManager1.ingredients);
// Create an order for the customized coffee
const order1 = new Order_1.Order("O001", coffeeWithMilkSugarAndCream, new Date());
console.log(`Order ID: ${order1.id}`);
console.log(`Coffee Ordered: ${order1.coffee.name}`);
console.log(`Total Cost of Order: $${order1.totalCost()}`);
console.log(`Order Timestamp: ${order1.timestamp.toISOString()}`);
// -------------------- Inventory Usage --------------------
// Use some ingredients and verify inventory update
const isMilkAvailable = inventoryManager1.useIngredient("milk", 20);
const isSugarAvailable = inventoryManager1.useIngredient("sugar", 10);
const isWhippedCreamAvailable = inventoryManager1.useIngredient("whippedCream", 5);
console.log(`Milk Available: ${isMilkAvailable ? "Yes" : "No"}`);
console.log(`Sugar Available: ${isSugarAvailable ? "Yes" : "No"}`);
console.log(`Whipped Cream Available: ${isWhippedCreamAvailable ? "Yes" : "No"}`);
// Check remaining inventory
console.log("Remaining Ingredients in Inventory:");
console.log(inventoryManager1.ingredients);
// -------------------- Singleton Check Again --------------------
if (inventoryManager1 === inventoryManager2) {
    console.log("Singleton pattern works! Both instances are still the same.");
}
else {
    console.log("Singleton pattern does NOT work! Instances are different.");
}
