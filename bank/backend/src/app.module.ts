import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationModule } from './config/configuration.module';
import { User } from './entity/user.entity';
import { Account } from './entity/account.entity';
import { HttpModule } from '@nestjs/axios';
import { ConfigurationService } from './config/configuration.service';

@Module({
  imports: [
    HttpModule,
    ConfigurationModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      inject: [ConfigurationService],
      useFactory: (configService: ConfigurationService) =>
        configService.typeOrmConfig,
    }),
    TypeOrmModule.forFeature([User, Account]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
