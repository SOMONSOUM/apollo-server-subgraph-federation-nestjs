import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/users.module';
import { TestModule } from './test/test.module';
import { AppResolver } from './app.resolver';
import { ApolloModule } from './apollo/apollo.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [ApolloModule, UserModule, TestModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
