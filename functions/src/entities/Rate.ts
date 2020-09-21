import { Length, Max, Min } from "class-validator";
import { Field, ObjectType } from "type-graphql";
import { Table } from "./Table";

@ObjectType()
export class Rate extends Table {
  @Field({ nullable: false })
  @Max(5)
  @Min(0)
  grade: number;

  @Field()
  @Length(20, 255)
  comment: string;
}
