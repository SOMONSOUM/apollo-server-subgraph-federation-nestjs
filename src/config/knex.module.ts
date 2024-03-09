import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KnexModule } from 'nest-knexjs';
import { KnexAASOptions, KnexSASOptions } from './options/knex.options';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    KnexModule.forRootAsync({
      useClass: KnexAASOptions,
    }),
    KnexModule.forRootAsync({
      useClass: KnexSASOptions,
    }),
  ],
  providers: [],
})
export class KnexConfigModule {}
