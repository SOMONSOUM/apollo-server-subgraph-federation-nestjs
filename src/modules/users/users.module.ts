import { Module } from '@nestjs/common';
import { UserResolver } from './users.resolver';

@Module({
  imports: [UserResolver],
  exports: [],
  providers: [],
})
export class UserModule {}
