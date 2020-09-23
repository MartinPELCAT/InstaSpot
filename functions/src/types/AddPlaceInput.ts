import { Field, InputType } from "type-graphql";
import { Place } from "../entities/Place";

@InputType()
export class AddPlaceInput implements Partial<Place> {
  @Field()
  description: string;

  @Field()
  title: string;

  @Field()
  latitude: number;

  @Field()
  longitude: number;
}
