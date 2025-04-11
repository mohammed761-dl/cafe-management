// src/dao/OrderDAO.ts

import { Order } from "../models/Order";

export interface OrderDAO {
  save(order: Order): Promise<void>;
  getById(id: string): Promise<Order | null>;
  getAll(): Promise<Order[]>;
}
