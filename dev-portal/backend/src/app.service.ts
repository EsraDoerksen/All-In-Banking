import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { App } from './entity/app.entity';
import { SharedDb } from './entity/shared-db.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(App)
    private readonly appRepository: Repository<App>,
    @InjectRepository(SharedDb)
    private readonly sharedDbRepository: Repository<SharedDb>,
  ) {}

  async listApps() {
    const apps = await this.appRepository.find();
    return apps.map((app) => ({
      ...app,
      url: `http://localhost:3001?appId=${app.appId}`,
    }));
  }

  saveSharedDb(appId: string, key: string, value: any) {
    this.sharedDbRepository.upsert({ key: appId + key, value }, ['key']);
  }

  listSharedDb(appId: string) {
    return this.sharedDbRepository.find({
      where: {
        key: Like(`${appId}%`),
      },
    });
  }
}
