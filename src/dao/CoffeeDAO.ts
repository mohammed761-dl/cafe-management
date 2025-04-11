// src/dao/CoffeeDAO.ts

import { Coffee } from "../models/Coffee";

export interface CoffeeDAO {
  save(coffee: Coffee): Promise<void>;
  getById(id: string): Promise<Coffee | null>;
  getAll(): Promise<Coffee[]>;
}
