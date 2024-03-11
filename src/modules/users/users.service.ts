import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { DATABASE_CONNECTIONS } from 'src/shared/enum';
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

  async findByEamil(args: { email: string }): Promise<User> {
    const { email } = args;
    return this.aasKnex.table('users').where('email', email).first();
  }

  async findById(args: { id: number }): Promise<User> {
    const { id } = args;
    return this.aasKnex.table('users').where('id', id).first();
  }
}
