import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationModule } from './config/configuration.module';
import { ConfigurationService } from './config/configuration.service';

@Module({
  imports: [   TypeOrmModule.forRootAsync({
    imports: [ConfigurationModule],
    inject: [ConfigurationService],
    useFactory: (configService: ConfigurationService) => configService.typeOrmConfig,
}),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
