import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from 'src/modules/users/users.service';
import { GraphQLError } from 'graphql';
import { ERROR_MESSAGES } from 'src/shared/errors/errorMessages';
import { JwtPayload } from 'src/common/schema/jwt-payload.schema';
import { JwtStrategyName } from 'src/common/enum';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(
  Strategy,
  JwtStrategyName.JWT,
) {
  constructor(
    private readonly userService: UserService,
    configService: ConfigService,
  ) {
    super({
      // extract jw t from authorization header
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // verify jwt signature
      secretOrKey: configService.get('ACCESS_TOKEN_SECRET'),
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.userService.findById(payload.id);

    // this methods is called after jwt is decoded and verified
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
