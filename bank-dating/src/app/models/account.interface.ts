import { Transaction } from './transaction.interface';

export interface Account {
  balance: number;
  transactions: Transaction[];
}
