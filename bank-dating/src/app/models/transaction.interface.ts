export interface Transaction {
  timestamp: string;
  description: string;
  location: string;
  amount: number;
  standingOrder: boolean;
}
