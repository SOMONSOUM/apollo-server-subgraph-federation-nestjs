import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { KnexModule } from 'nest-knexjs';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KnexModule.forRootAsync(
      {
        useFactory: (configService: ConfigService) => ({
          config: {
            version: '5.7',
            useNullAsDefault: true,
            client: configService.get<string>('DB_CLIENT'),
            connection: configService.get<string>('AAS_DATABASE_URL'),
          },
        }),
        inject: [ConfigService],
      },
      'AAS',
    ),
    KnexModule.forRootAsync(
      {
        useFactory: (configService: ConfigService) => ({
          config: {
            version: '5.7',
            useNullAsDefault: true,
            client: configService.get<string>('DB_CLIENT'),
            connection: configService.get<string>('SAS_DATABASE_URL'),
          },
        }),
        inject: [ConfigService],
      },
      'SAS',
    ),
  ],
  providers: [],
})
export class KnexConfigModule {}
