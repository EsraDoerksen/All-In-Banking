import { Transaction } from './transaction.interface';

export interface Account {
  userId: string;
  balance: number;
  transactions: Transaction[];
}
