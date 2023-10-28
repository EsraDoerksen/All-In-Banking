import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { App } from './entity/app.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(App)
    private readonly appRepository: Repository<App>,
  ) {}

  listApps() {
    return this.appRepository.find();
  }
}
