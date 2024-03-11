import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { UserService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { HashingService } from 'src/common/service/hashing.service';
import { BcryptService } from 'src/common/service/bcrypt.service';
import { TokenService } from 'src/common/service/token.service';

@Module({
  providers: [
    AuthResolver,
    AuthService,
    UserService,
    JwtService,
    TokenService,
    {
      provide: HashingService,
      useClass: BcryptService,
    },
  ],
  imports: [],
  exports: [],
})
export class AuthModule {}
