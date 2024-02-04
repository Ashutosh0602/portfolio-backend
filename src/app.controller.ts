import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { SkipThrottle, Throttle } from '@nestjs/throttler';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request): Promise<string> {
    // console.log(request)
    return this.appService.getHello();
  }
}
