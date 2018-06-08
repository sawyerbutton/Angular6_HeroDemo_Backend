import { Get, Controller, Param, Body, Post, Patch, Delete, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Hero} from './data';
import { Observable} from 'rxjs/internal/Observable';

@Controller('heroes')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  public async getAllHero(){
    const msg = await this.appService.getAllHero();
    return msg;
  }
  @Get(':id')
  public async getHeroById(@Param() params){
    const msg = await this.appService.getHeroById(params.id);
    return msg;
  }
  @Post()
  public async addHero(@Body() hero){
    const msg = await this.appService.addHero(hero);
    return msg;
  }
  @Patch(':id')
  public async updateHero(@Param() params, @Body() newHero){
    const msg = await this.appService.updateHero(params.id, newHero);
    return msg;
  }
  @Delete(':id')
  public async deleteHero(@Param() params) {
    const msg = await this.appService.deleteHero(params.id);
    return msg;
  }
  @Get('search/:id')
  public async searchHero(@Query() query){
    const msg = await this.appService.searchHero(query.name);
    return msg;
  }
}
