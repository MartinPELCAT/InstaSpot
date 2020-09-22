import { Field, ObjectType } from "type-graphql";
import { Rate } from "./Rate";
import { Table } from "./Table";

@ObjectType()
export class Place extends Table {
  @Field(() => String, { nullable: true })
  readonly id: string;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  latitude: number;

  @Field()
  longitude: number;

  @Field()
  geohash: string;

  @Field(() => [Rate])
  rates: Rate[];

  @Field({ nullable: true })
  averageNote: number;
}
