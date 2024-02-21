import { Module } from '@nestjs/common';
import { TestResolver } from './test.resolver';

@Module({
  imports: [TestResolver],
  providers: [],
})
export class TestModule {}
