import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Account {
  @PrimaryColumn({ type: 'varchar' })
  userId: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  balance: number;

  @Column({ type: 'json' })
  transactions: any; // timestamp, description, amount, location, continousPayment
}
