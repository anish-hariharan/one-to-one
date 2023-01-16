import { PrimaryGeneratedColumn, Column, Entity, OneToOne } from "typeorm";
import { Contact } from "./Contact";

@Entity()
export class User {
    @PrimaryGeneratedColumn({
        type: 'int'
    })
    id: number

    @Column({
        type:'varchar'
    })
    name: string

    @Column({
        type: 'int'
    })
    age: number

    @OneToOne( () => Contact, (contact) => contact.details, {onDelete: 'CASCADE', cascade: ['insert', 'update']} )
    contact: Contact
}