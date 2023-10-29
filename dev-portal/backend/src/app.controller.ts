import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

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
  getUser() {
    return { user: '123' };
  }

  @Get('account')
  getAccount() {
    return { account: '123' };
  }
}
