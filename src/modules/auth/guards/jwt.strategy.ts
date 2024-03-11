import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpStatus, Injectable } from '@nestjs/common';
import * as process from 'process';
import { UserService } from 'src/modules/users/users.service';
import { GraphQLError } from 'graphql';
import { ERROR_MESSAGES } from 'src/shared/errors/errorMessages';
import { JwtPayload } from 'src/common/schema/jwt-payload.schema';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRECT,
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.userService.findById({
      id: payload.id,
    });

    if (!user) {
      throw new GraphQLError(ERROR_MESSAGES.NOT_FOUND, {
        extensions: {
          code: HttpStatus.NOT_FOUND,
        },
      });
    }
    return user;
  }
}
