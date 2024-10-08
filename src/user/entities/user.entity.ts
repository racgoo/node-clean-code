import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Exclude()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column({ select: false })
  password: string;
  @CreateDateColumn({ select: false })
  createdAt: Date;
  @UpdateDateColumn({ select: false })
  updatedAt: Date;
}
