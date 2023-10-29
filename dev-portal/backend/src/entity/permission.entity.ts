import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Permission {
  @PrimaryColumn({ type: 'varchar' })
  appId: number;

  @Column({ type: 'json' })
  userId: string[];
}
