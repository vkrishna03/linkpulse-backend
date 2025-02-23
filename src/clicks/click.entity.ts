import { LinkEntity } from 'src/links/link.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clicks')
export class ClickEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  country?: string;

  @Column({ nullable: true })
  referrer?: string;

  @Column({ nullable: true })
  ipHash?: string;

  @Column({ type: 'timestamptz', nullable: false, default: 'now()' })
  createdAt: Date;

  @ManyToOne(() => LinkEntity, (link) => link.clicks)
  link: LinkEntity;
}
