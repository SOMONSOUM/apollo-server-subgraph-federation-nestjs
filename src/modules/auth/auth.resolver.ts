import { Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput } from './dto/login.input';
import { LoginResponse } from './schema/login.schema';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthResolver) {}

  @Mutation(() => LoginResponse)
  async login(input: LoginInput): Promise<LoginResponse> {
    const { token } = await this.authService.login({
      email: input?.email,
      password: input?.password,
    });

    return { token };
  }
}
