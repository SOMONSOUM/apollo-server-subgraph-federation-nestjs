import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { DATABASE_CONNECTIONS } from 'src/common/enum';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectConnection(DATABASE_CONNECTIONS.AAS)
    private readonly aasKnex: Knex,
    @InjectConnection(DATABASE_CONNECTIONS.SAS)
    private readonly sasKnex: Knex,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.aasKnex.select('*').from('users');
  }

  async getAllImports() {
    return await this.sasKnex.select('*').from('imports');
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.aasKnex.table('users').where({ email }).first();
  }

  async findById(id: number): Promise<User> {
    return await this.aasKnex.table('users').where('id', id).first();
  }
}
