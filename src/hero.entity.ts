import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class HeroEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}