import { HttpStatus, Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectConnection } from 'nest-knexjs';
import { DATABASE_CONNECTIONS } from 'src/common/enum';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/users.service';
import { LoginResponse } from './schema/login.schema';
import { GraphQLError } from 'graphql';
import { ERROR_MESSAGES } from 'src/shared/errors/errorMessages';
import { TokenService } from 'src/common/service/token.service';
import { HashingService } from 'src/common/service/hashing.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectConnection(DATABASE_CONNECTIONS.AAS)
    private readonly knex: Knex,
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly hashingService: HashingService,
    private readonly tokenService: TokenService,
  ) {}

  public async login(args: {
    email: string;
    password: string;
  }): Promise<LoginResponse> {
    const { email, password } = args;
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new GraphQLError(ERROR_MESSAGES.NOT_FOUND, {
        extensions: {
          code: HttpStatus.NOT_FOUND,
        },
      });
    }

    const passwordMatches = await this.hashingService.compare(
      password,
      user?.password,
    );

    if (!passwordMatches) {
      throw new GraphQLError(ERROR_MESSAGES.PASSWORD_IN_CORRECT, {
        extensions: {
          code: HttpStatus.UNAUTHORIZED,
        },
      });
    }

    const { accessToken } = await this.tokenService.createTokens(
      user.id,
      user.email,
    );

    return {
      token: accessToken,
    };
  }
}
