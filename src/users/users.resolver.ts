import { Args, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Query(() => Int)
  findUserById(@Args('id', { type: () => Int }) id: number) {
    return id;
  }
}
