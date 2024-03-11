import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType({ description: 'User schema' })
export class User {
  @Field((type) => Int)
  id: number;

  @Field((type) => String)
  email: string;

  @Field((type) => String, { nullable: true })
  first_name?: string;

  @Field((type) => String, { nullable: true })
  last_name?: string;
}
