import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BeforeInsert} from "typeorm";
import { User } from "./User";

@Entity()
export class Session {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    accessToken: string;

    @Column()
    createdAt: Date;

    @OneToOne(type => User)
    @JoinColumn()
    user: User;

    @BeforeInsert()
    setCreatedAt() {
      this.createdAt = new Date();
    }
}
