import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

//@UseGuards(AuthGuard('jwt'))
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user')
  getUser() {
    return this.appService.getUser('1');
  }

  @Get('account')
  getAccount() {
    return this.appService.getAccount('1');
  }

  @Get('apps')
  listApps() {
    return this.appService.listApps();
  }
}
