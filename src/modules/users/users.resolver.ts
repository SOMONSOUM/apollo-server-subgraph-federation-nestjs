import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { User } from './schema/user.schema';
import { UserService } from './users.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => Int)
  findUserById(@Args('id', { type: () => Int }) id: number) {
    return id;
  }

  @Query(() => [User])
  async queryUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
}
