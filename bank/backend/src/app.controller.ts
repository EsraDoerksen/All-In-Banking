import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtUser } from './jwt-user.decorator';

@UseGuards(AuthGuard('jwt'))
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user')
  getUser(@JwtUser() user: { userId: string }) {
    return this.appService.getUser(user.userId);
  }

  @Get('account')
  getAccount(@JwtUser() user: { userId: string }) {
    return this.appService.getAccount(user.userId);
  }

  @Get('apps')
  listApps(@JwtUser() user: { userId: string }) {
    return this.appService.listApps();
  }
}
