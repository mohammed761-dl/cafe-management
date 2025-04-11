"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openDatabase = openDatabase;
exports.storeCoffee = storeCoffee;
exports.storeOrder = storeOrder;
exports.storeManager = storeManager;
exports.storeInventory = storeInventory;
exports.getCoffeeByName = getCoffeeByName;
exports.getOrderById = getOrderById;
exports.getManagerById = getManagerById;
exports.getInventoryByIngredient = getInventoryByIngredient;
const dbName = "CafeManagementDB";
let db = null;
// Open the IndexedDB and create necessary object stores
function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);
        request.onupgradeneeded = function (event) {
            db = event.target.result;
            // Create object stores if they don't exist
            createObjectStore("coffees", "name");
            createObjectStore("orders", "id");
            createObjectStore("managers", "id");
            createObjectStore("inventory", "ingredient");
        };
        request.onsuccess = function () {
            db = request.result;
            console.log("Database opened successfully.");
            resolve();
        };
        request.onerror = function (event) {
            reject(`Error opening database: ${event.target.error}`);
        };
    });
}
function createObjectStore(storeName, keyPath) {
    if (db && !db.objectStoreNames.contains(storeName)) {
        db.createObjectStore(storeName, { keyPath });
    }
}
// Helper function to execute a store operation
function storeEntity(storeName, entity) {
    return new Promise((resolve, reject) => {
        if (db) {
            const transaction = db.transaction([storeName], "readwrite");
            const store = transaction.objectStore(storeName);
            const request = store.add(entity);
            request.onsuccess = () => resolve();
            request.onerror = () => reject(`Error storing ${storeName}: ${request.error}`);
        }
    });
}
// Store a Coffee entity in IndexedDB
function storeCoffee(coffee) {
    const coffeeToStore = {
        name: coffee.name,
        cost: coffee.cost(),
    };
    return storeEntity("coffees", coffeeToStore);
}
// Store an Order entity in IndexedDB
function storeOrder(order) {
    const orderToStore = {
        id: order.id,
        coffeeName: order.coffee.name,
        timestamp: order.timestamp,
    };
    return storeEntity("orders", orderToStore);
}
// Store a Manager entity in IndexedDB
function storeManager(manager) {
    const managerToStore = {
        id: manager.id,
        name: manager.name,
    };
    return storeEntity("managers", managerToStore);
}
// Store an Inventory entity in IndexedDB
function storeInventory(ingredient) {
    const inventoryToStore = {
        ingredient: ingredient.ingredient,
        quantity: ingredient.quantity,
    };
    return storeEntity("inventory", inventoryToStore);
}
// Helper function to get an entity by key
function getEntityByKey(storeName, key) {
    return new Promise((resolve, reject) => {
        if (db) {
            const transaction = db.transaction([storeName], "readonly");
            const store = transaction.objectStore(storeName);
            const request = store.get(key);
            request.onsuccess = function () {
                resolve(request.result);
            };
            request.onerror = function () {
                reject(`Error retrieving ${storeName}: ${request.error}`);
            };
        }
    });
}
// Retrieve a Coffee by its name
function getCoffeeByName(coffeeName) {
    return getEntityByKey("coffees", coffeeName);
}
// Retrieve an Order by its ID
function getOrderById(orderId) {
    return getEntityByKey("orders", orderId);
}
// Retrieve a Manager by its ID
function getManagerById(managerId) {
    return getEntityByKey("managers", managerId);
}
// Retrieve Inventory by Ingredient name
function getInventoryByIngredient(ingredient) {
    return getEntityByKey("inventory", ingredient);
}
