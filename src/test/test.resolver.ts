import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

@Resolver()
export class TestResolver {
  @Query(() => [String])
  findAllTests() {
    return ['test 1', 'test 2', 'test 3'];
  }

  @Query(() => String)
  findTestById(@Args('id', { type: () => Int }) id: number) {
    return 'test ' + id;
  }

  @Mutation(() => String)
  createTest(@Args('input') input: CreateTestDto) {
    return input.message;
  }

  @Mutation(() => Boolean)
  updateTest(@Args('input') input: UpdateTestDto) {
    return input.id > 0;
  }
}
