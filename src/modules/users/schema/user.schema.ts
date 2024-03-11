import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType({ description: 'User schema' })
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String, { nullable: true })
  first_name?: string;

  @Field(() => String, { nullable: true })
  last_name?: string;
}
