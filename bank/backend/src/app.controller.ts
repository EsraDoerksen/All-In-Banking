import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtUser } from './jwt-user.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get('user')
  getUser(@JwtUser() user: { userId: string }) {
    return this.appService.getUser(user.userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('account')
  getAccount(@JwtUser() user: { userId: string }) {
    return this.appService.getAccount(user.userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('apps')
  listApps(@JwtUser() user: { userId: string }) {
    return this.appService.listApps();
  }

  @Get('userdev/:userId')
  getUserDevPortal(@Param('userId') userId: string) {
    return this.appService.getUser(userId);
  }

  @Get('accountdev/:userId')
  getAccountDevPortal(@Param('userId') userId: string) {
    return this.appService.getAccount(userId);
  }
}
