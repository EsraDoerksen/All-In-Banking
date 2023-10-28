import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
import { Account } from './entity/account.entity';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    private readonly httpService: HttpService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Account)
    private readonly accountrepository: Repository<Account>,
  ) {}

  getUser(userId: string) {
    return this.userRepository.findOneBy({ userId });
  }

  getAccount(userId: string) {
    return this.accountrepository.findOneBy({ userId });
  }

  async listApps() {
    const response = await firstValueFrom(
      this.httpService.get('http://localhost:3001/apps'),
    );
    return response.data;
  }
}
