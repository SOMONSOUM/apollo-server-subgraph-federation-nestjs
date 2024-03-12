import { InputType, Field } from '@nestjs/graphql';

@InputType({ description: 'user dto input' })
export class CreateUserInputDTO {
  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  first_name: string;

  @Field(() => String)
  last_name: string;
}
