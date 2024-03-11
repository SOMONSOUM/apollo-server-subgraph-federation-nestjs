import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput } from './dto/login.input';
import { LoginResponse } from './schema/login.schema';
import { AuthService } from './auth.service';
import { HttpCode, HttpStatus } from '@nestjs/common';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @HttpCode(HttpStatus.CREATED)
  async login(@Args('input') input: LoginInput): Promise<LoginResponse> {
    const { token } = await this.authService.login({
      email: input?.email,
      password: input?.password,
    });

    return { token };
  }
}
