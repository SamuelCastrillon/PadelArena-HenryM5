import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MatchesModule } from './matches/matches.module';

@Module({
  imports: [UserModule, MatchesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
