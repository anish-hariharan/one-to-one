import { PrimaryGeneratedColumn, Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Contact {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    job: string

    @Column()
    experience: string

    @OneToOne(() => User, {cascade:true, onDelete: 'CASCADE'})
    @JoinColumn()
    details: User
}