import { Module } from '@nestjs/common';
import { UserResolver } from './users.resolver';
import { UserService } from './users.service';
import { HashingService } from 'src/common/service/hashing.service';
import { BcryptService } from 'src/common/service/bcrypt.service';

@Module({
  imports: [],
  providers: [
    UserResolver,
    UserService,
    {
      provide: HashingService,
      useClass: BcryptService,
    },
  ],
  exports: [UserService],
})
export class UserModule {}
