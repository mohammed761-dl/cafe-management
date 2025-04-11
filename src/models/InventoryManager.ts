// src/models/InventoryManager.ts

export class InventoryManager {
  private static instance: InventoryManager;
  public ingredients: Map<string, number>;

  private constructor() {
    this.ingredients = new Map<string, number>();
  }

  public static getInstance(): InventoryManager {
    if (!InventoryManager.instance) {
      InventoryManager.instance = new InventoryManager();
    }
    return InventoryManager.instance;
  }

  public addIngredient(name: string, qty: number): void {
    if (this.ingredients.has(name)) {
      this.ingredients.set(name, this.ingredients.get(name)! + qty);
    } else {
      this.ingredients.set(name, qty);
    }
  }

  public useIngredient(name: string, qty: number): boolean {
    if (this.ingredients.has(name) && this.ingredients.get(name)! >= qty) {
      this.ingredients.set(name, this.ingredients.get(name)! - qty);
      return true;
    }
    return false;
  }
}
