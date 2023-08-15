import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Profile } from "./profilesEntities"

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    last_name: string

    @Column()
    email: string

    @Column()
    tel: string

    @OneToMany(() => Profile, profile => profile.cliente)
    perfiles: Profile[];
  

}