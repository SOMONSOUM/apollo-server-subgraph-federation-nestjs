import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { DATABASE_CONNECTIONS } from 'src/common/enum';
import { User } from './schema/user.schema';
import { CreateUserInputDTO } from './dto/user-input.dto';

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

  async findByEmail(email: string): Promise<User | undefined> {
    return await this.aasKnex.table('users').where({ email }).first();
  }

  async findById(id: number): Promise<User> {
    return await this.aasKnex.table('users').where('id', id).first();
  }

  async create(args: CreateUserInputDTO): Promise<number> {
    return await this.aasKnex.table('users').insert(args);
  }
}
