import { Injectable } from '@nestjs/common';
import { Hero, HEROES } from './data';
import { Observable } from 'rxjs/internal/Observable';
import { of} from 'rxjs/internal/observable/of';
import { Inject } from '@nestjs/common/utils/decorators/inject.decorator';
import { getConnection, Repository } from 'typeorm';
import { HeroEntity } from './hero.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject('HeroRepository') private heroRepository: Repository<HeroEntity>,
  ){}
  public async getAllHero(): Promise<Hero[]> {
    return await this.heroRepository.find();
  }
  public async getHeroById(heroId: number): Promise<Hero> {
    return await this.heroRepository.findOne({where: {id: heroId}});
  }
  public async addHero(hero: Hero): Promise<Hero> {
    return await this.heroRepository.save(hero);
  }
  public async updateHero(heroId: number, newHero: Hero): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .update(HeroEntity).where('id = :id', {id: heroId})
      .set(newHero).execute();
  }
  public async deleteHero(heroId: number): Promise<any> {
    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(HeroEntity)
      .where('id = :id', { id: heroId })
      .execute();
    return await this.heroRepository.findOne({where: {id: heroId}});
  }
  public async searchHero(heroName: string): Promise<Hero[]> {
    return await this.heroRepository.find({where: {name: heroName}});
  }
}
