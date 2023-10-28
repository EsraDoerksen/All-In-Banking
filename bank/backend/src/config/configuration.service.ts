import { Injectable, LogLevel } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class ConfigurationService {
  constructor(private readonly configService: ConfigService) {}

  get devPortalRootUrl(): string {
    return this.configService.get('DEV_PORTAL_ROOT_URL');
  }

  get jwkUri(): string {
    return this.configService.get('JWK_URI');
  }

  get typeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'mariadb',
      host: this.configService.get('DB_HOST'),
      port: 3306,
      username: this.configService.get('DB_USER'),
      password: this.configService.get('DB_PWD'),
      database: this.configService.get('DB_NAME'),
      dropSchema: false,
      entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
      synchronize: true,
      migrationsRun: false,
      ssl: false,
    };
  }
}
