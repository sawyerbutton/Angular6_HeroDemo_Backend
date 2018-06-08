import { Connection} from 'typeorm';
import { HeroEntity} from './hero.entity';

export const HeroProvider = {
  provide: 'HeroRepository',
  useFactory: (connection: Connection) => connection.getRepository(HeroEntity),
  inject: ['TypeORMInstance'],
}