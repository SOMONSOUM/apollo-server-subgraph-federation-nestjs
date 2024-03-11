import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: 'Login input' })
export class LoginInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;
}
