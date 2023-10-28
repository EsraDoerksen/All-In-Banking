import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

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
