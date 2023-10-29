import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationModule } from './config/configuration.module';
import { ConfigurationService } from './config/configuration.service';
import { App } from './entity/app.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SharedDb } from './entity/shared-db.entity';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      inject: [ConfigurationService],
      useFactory: (configService: ConfigurationService) =>
        configService.typeOrmConfig,
    }),
    TypeOrmModule.forFeature([App, SharedDb]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
