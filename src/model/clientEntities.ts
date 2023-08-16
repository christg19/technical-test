import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity, ManyToMany, JoinTable} from "typeorm";
import { Profile } from "./profilesEntities"
import { Product } from "./productsEntities";

@Entity()
export class Client extends BaseEntity{
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

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;

    @ManyToMany(() => Product)
    @JoinTable()
    products: Product[];
  

} 