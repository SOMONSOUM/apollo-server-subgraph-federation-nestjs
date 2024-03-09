import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { KnexModuleOptions, KnexOptionsFactory } from 'nest-knexjs';
import { DATABASE_CONNECTIONS } from 'src/enum';

@Injectable()
export class KnexAASOptions implements KnexOptionsFactory {
  constructor(private configService: ConfigService) {}
  createKnexOptions(): KnexModuleOptions | Promise<KnexModuleOptions> {
    return {
      name: DATABASE_CONNECTIONS.AAS,
      config: {
        client: this.configService.get<string>('DB_CLIENT'),
        connection: this.configService.get('AAS_DATABASE_URL'),
      },
    };
  }
}

@Injectable()
export class KnexSASOptions implements KnexOptionsFactory {
  constructor(private configService: ConfigService) {}
  createKnexOptions(): KnexModuleOptions | Promise<KnexModuleOptions> {
    return {
      name: DATABASE_CONNECTIONS.SAS,
      config: {
        client: this.configService.get<string>('DB_CLIENT'),
        connection: this.configService.get('SAS_DATABASE_URL'),
      },
    };
  }
}
