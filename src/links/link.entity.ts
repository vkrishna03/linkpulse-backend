import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { UserEntity } from 'src/users/user.entity';
import { ClickEntity } from 'src/clicks/click.entity';

@Entity('links')
export class LinkEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  originalUrl: string;

  @Column({ unique: true })
  shortCode: string;

  @ManyToOne(() => UserEntity, (user) => user.links)
  user: UserEntity;

  @Column({ nullable: true })
  customSlug?: string;

  @Column({ type: 'timestamptz', nullable: false, default: 'now()' })
  createdAt: Date;

  @OneToMany(() => ClickEntity, (click) => click.link)
  clicks: ClickEntity[];
}
