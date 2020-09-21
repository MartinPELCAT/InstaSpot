import { firestore } from "firebase-admin";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Table {
  @Field()
  id: string;

  @Field(() => Date, { nullable: false })
  createdAt: firestore.Timestamp;

  @Field(() => Date, { nullable: false })
  updatedAt: firestore.Timestamp;

  @Field(() => Date, { nullable: true })
  deletedAt: firestore.Timestamp;
}
