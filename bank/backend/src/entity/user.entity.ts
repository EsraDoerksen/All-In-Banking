import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ type: 'varchar' })
  userId: string;

  @Column({ type: 'varchar' })
  firstname: string;

  @Column({ type: 'varchar' })
  lastname: string;

  @Column({ type: 'varchar' })
  sex: string;

  @Column({ type: 'varchar' })
  city: string;

  @Column({ type: 'date' })
  birthdate: string;
}
