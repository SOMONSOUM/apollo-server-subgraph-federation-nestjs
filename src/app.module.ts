import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/users.module';
import { TestModule } from './test/test.module';
import { AppResolver } from './app.resolver';
import { ApolloModule } from './apollo/apollo.module';

@Module({
  imports: [AppModule, ApolloModule, UserModule, TestModule],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
