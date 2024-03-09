import { Query, Resolver } from '@nestjs/graphql';

@Resolver('String')
export class AppResolver {
  @Query(() => String)
  health(): string {
    return 'im ok!';
  }
}
