import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'address' })
export class AddressEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'user_id', nullable: false })
  userId: number;
  @Column({ name: 'complement', nullable: true })
  complement: string;
  @Column({ name: 'number_address', nullable: false })
  numberAddress: number;
  @Column({ name: 'cep', nullable: false })
  cep: string;
  @Column({ name: 'city_id', nullable: false })
  cityId: number;
  @CreateDateColumn({ name: 'created_at' })
  createAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updateAt: Date;
}