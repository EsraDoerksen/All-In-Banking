import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class SharedDb {
  @PrimaryColumn({ type: 'varchar' })
  key: string;

  @Column({ type: 'json' })
  value: any;
}
