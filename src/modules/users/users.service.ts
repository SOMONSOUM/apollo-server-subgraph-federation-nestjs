import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { DATABASE_CONNECTIONS } from 'src/enum';

@Injectable()
export class UserService {
  constructor(
    @InjectConnection(DATABASE_CONNECTIONS.AAS)
    private readonly aasKnex: Knex,
    @InjectConnection(DATABASE_CONNECTIONS.SAS)
    private readonly sasKnex: Knex,
  ) {}

  async getAllUsers() {
    return await this.aasKnex.select('*').from('users');
  }

  async getAllImports() {
    return await this.sasKnex.select('*').from('imports');
  }
}
