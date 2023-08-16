import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Client } from './clientEntities';
import { Product } from './productsEntities';

@Entity()
export class purchaseHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Client)
  @JoinColumn({ name: 'client_id' })
  client: Client;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product: Product;

}
