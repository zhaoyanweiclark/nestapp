import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LimitController } from './limit.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController,LimitController],
  providers: [AppService],
})
export class AppModule {}
