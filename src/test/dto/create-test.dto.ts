import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateTestInput')
export class CreateTestDto {
  @Field(() => String)
  message: string;
}
