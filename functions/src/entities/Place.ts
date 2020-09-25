import { Field, ObjectType } from "type-graphql";
import { Table } from "./Table";

@ObjectType()
export class Place extends Table {
  @Field(() => String, { nullable: true })
  readonly id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  photoPath: string;

  @Field()
  latitude: number;

  @Field()
  longitude: number;

  @Field()
  geohash: string;

  @Field()
  likes: number;
}
