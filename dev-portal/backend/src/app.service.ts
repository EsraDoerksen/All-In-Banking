import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  listApps() {
    return 'Hello World!';
  }
}
