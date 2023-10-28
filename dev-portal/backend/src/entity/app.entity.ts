import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class App {
  @PrimaryGeneratedColumn()
  appId: number;

  @Column({ type: 'varchar' })
  userId: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'blob' })
  icon: string;

  // @Column({ type: 'varchar' })
  // files: string;
}
