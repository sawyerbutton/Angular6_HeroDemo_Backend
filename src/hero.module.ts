import { Module} from '@nestjs/common';
import { HeroProvider} from './hero.provider';
import { AppController} from './app.controller';
import { AppService} from './app.service';
import { DatabaseModule} from './database/database.module';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
    HeroProvider,
  ],
})

export class HeroModule {}