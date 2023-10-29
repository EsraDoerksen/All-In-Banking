import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { JwtUser } from './jwt-user.decorator';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService,
  ) {}

  @Get('apps')
  listApps() {
    return this.appService.listApps();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('sharedDBUpsert')
  upsertSharedDb(@Body() body: { appId: string; key: string; value: any }) {
    console.log('dfdfdfd');
    this.appService.saveSharedDb(body.appId, body.key, body.value);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('sharedDBList')
  listSharedDb(@Body() body: { appId: string }) {
    return this.appService.listSharedDb(body.appId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('user')
  async getUser(@JwtUser() u: { userId: string }) {
    const userId = u.userId;
    const user = await firstValueFrom(
      this.httpService.get(`http://localhost:3000/userdev/${userId}`),
    );
    return user.data;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('account')
  async getAccount(@JwtUser() u: { userId: string }) {
    const userId = u.userId;
    const account = await firstValueFrom(
      this.httpService.get(`http://localhost:3000/accountdev/${userId}`),
    );
    return account.data;
  }
}
