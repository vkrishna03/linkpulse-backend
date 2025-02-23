import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { LinkEntity } from '../links/link.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: ['free', 'premium'], default: 'free' })
  subscriptionPlan: 'free' | 'premium';

  @Column({ nullable: true })
  customDomain?: string;

  @Column({ type: 'timestamptz', nullable: false, default: () => 'now()' })
  createdAt: Date;

  @OneToMany(() => LinkEntity, (link) => link.user)
  links: LinkEntity[];
}
