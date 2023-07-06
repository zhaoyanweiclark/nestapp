import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getallusers() {
    return this.appService.getallusers();
  }

  @Get("oneUser")
  getOneUser() {
    return this.appService.getOneUser();
  }
}