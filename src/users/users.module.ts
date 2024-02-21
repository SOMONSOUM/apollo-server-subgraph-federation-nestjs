import { Module } from '@nestjs/common';
import { UserResolver } from './users.resolver';

@Module({
  imports: [UserResolver],
  providers: [],
})
export class UserModule {}
