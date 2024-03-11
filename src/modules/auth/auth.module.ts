import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { UserService } from '../users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './guards/jwt.strategy';

@Module({
  providers: [AuthResolver, AuthService, UserService, JwtStrategy],
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRECT,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  exports: [AuthService, JwtStrategy, JwtModule],
})
export class AuthModule {}
