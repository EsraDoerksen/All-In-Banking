export interface Transaction {
  timeStamp: Date;
  description: string;
  amount: number;
  location: string;
  standingOrder: boolean;
}
