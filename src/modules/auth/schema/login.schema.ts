import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Login response' })
export class LoginResponse {
  @Field(() => String)
  token: string;
}
