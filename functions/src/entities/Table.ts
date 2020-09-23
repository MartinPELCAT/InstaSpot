import { firestore } from "firebase-admin";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Table {
  @Field()
  id: string;

  @Field(() => Date, { nullable: true })
  createdAt: firestore.Timestamp;

  @Field(() => Date, { nullable: true })
  updatedAt: firestore.Timestamp;

  @Field(() => Date, { nullable: true }) // return date to the clients
  deletedAt: firestore.Timestamp; // Timestamp in code
}
