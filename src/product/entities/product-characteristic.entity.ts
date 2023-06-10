import { UUID } from 'crypto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product_characteristics' })
export class ProductCharacteristicEntity {
  @PrimaryGeneratedColumn('uuid')
  id: UUID;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'description', length: 255, nullable: false })
  description: string;
}
