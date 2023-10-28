import { Module } from '@nestjs/common';

import { ConfigurationService } from './configuration.service';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.env.${process.env.NODE_ENV || 'prod'}`,
        }),
    ],
    providers: [ConfigurationService],
    exports: [ConfigurationService],
    controllers: [],
})
export class ConfigurationModule {}
