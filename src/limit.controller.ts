import { Controller, Get,Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller("limit")
export class LimitController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getLimit(): any {
    return this.appService.getLimit();
  }
}
