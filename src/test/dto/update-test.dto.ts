import { Field, InputType, Int } from '@nestjs/graphql';

@InputType('UpdateTestInput')
export class UpdateTestDto {
  @Field(() => Int)
  id: number;
}
