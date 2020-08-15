import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToOne} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    userName: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @Column()
    createdAt: Date;

    @BeforeInsert()
    setCreatedAt() {
      this.createdAt = new Date();
    }
}
