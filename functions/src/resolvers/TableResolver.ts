import { FieldResolver, Resolver, Root } from "type-graphql";
import { Table } from "../entities/Table";

@Resolver(() => Table)
export class TableResolver {
  @FieldResolver()
  async createdAt(@Root() table: Table) {
    return table.createdAt?.toDate();
  }

  @FieldResolver()
  async deletedAt(@Root() table: Table) {
    return table.deletedAt?.toDate();
  }

  @FieldResolver()
  async updatedAt(@Root() table: Table) {
    return table.updatedAt?.toDate();
  }
}
