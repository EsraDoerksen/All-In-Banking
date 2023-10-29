import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

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

  @Post('sharedDBUpsert')
  upsertSharedDb(@Body() body: { appId: string; key: string; value: any }) {
    console.log('dfdfdfd');
    this.appService.saveSharedDb(body.appId, body.key, body.value);
  }

  @Post('sharedDBList')
  listSharedDb(@Body() body: { appId: string }) {
    return this.appService.listSharedDb(body.appId);
  }

  @Get('user')
  async getUser() {
    const userId = 'auth0|653d2616b40aed8716e454dc';
    const user = await firstValueFrom(
      this.httpService.get(`http://localhost:3000/userdev/${userId}`),
    );
    return user.data;
  }

  @Get('account')
  async getAccount() {
    const userId = 'auth0|653d2616b40aed8716e454dc';
    const account = await firstValueFrom(
      this.httpService.get(`http://localhost:3000/accountdev/${userId}`),
    );
    return account.data;
  }
}
