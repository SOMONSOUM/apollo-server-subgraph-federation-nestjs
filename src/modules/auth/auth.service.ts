import { HttpStatus, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { DATABASE_CONNECTIONS } from 'src/shared/enum';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/users.service';
import { LoginResponse } from './schema/login.schema';
import { GraphQLError } from 'graphql';
import { ERROR_MESSAGES } from 'src/shared/errors/errorMessages';

@Injectable()
export class AuthService {
  constructor(
    @InjectConnection(DATABASE_CONNECTIONS.AAS)
    private readonly knex: Knex,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(args: {
    email: string;
    password: string;
  }): Promise<LoginResponse> {
    const { email } = args;
    const user = await this.userService.findByEamil({ email });

    if (!user) {
      throw new GraphQLError(ERROR_MESSAGES.NOT_FOUND, {
        extensions: {
          code: HttpStatus.NOT_FOUND,
        },
      });
    }

    const jwtPayload = {
      id: user.id,
    };
    return {
      token: this.jwtService.sign(jwtPayload),
    };
  }
}
