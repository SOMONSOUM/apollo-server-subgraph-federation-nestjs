import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginInput } from './dto/login.input';
import { LoginResponse } from './schema/login.schema';
import { AuthService } from './auth.service';
import { HttpCode, HttpStatus } from '@nestjs/common';
import { CreateUserInputDTO } from '../users/dto/user-input.dto';

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

  @Mutation(() => Boolean)
  @HttpCode(HttpStatus.CREATED)
  async signup(@Args('input') input: CreateUserInputDTO): Promise<boolean> {
    const isUserCreated = await this.authService.signup(input);
    return isUserCreated;
  }
}
