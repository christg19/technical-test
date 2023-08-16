import { Entity, PrimaryGeneratedColumn, Column, OneToOne, BaseEntity} from 'typeorm';
import { Client } from './clientEntities';

@Entity()
export class Profile extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  rol: string;

  // @OneToOne(() => Client, client => client.profile) 
  // client: Client;
} 