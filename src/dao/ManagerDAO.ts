// src/dao/ManagerDAO.ts

import { Manager } from "../models/Manager";

export interface ManagerDAO {
  save(manager: Manager): Promise<void>;
  getById(id: string): Promise<Manager | null>;
  getAll(): Promise<Manager[]>;
}
