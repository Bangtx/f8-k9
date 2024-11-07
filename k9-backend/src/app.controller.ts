import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('anh_em')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('f8')
  getHello(): string {
    return 'test thoi anh em 22'
  }
}
