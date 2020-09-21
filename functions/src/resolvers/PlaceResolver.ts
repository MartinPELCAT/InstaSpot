import { firestore } from "firebase-admin";
import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { Place } from "../entities/Place";
import { Rate } from "../entities/Rate";
import { TABLES } from "../types/constants";

@Resolver(() => Place)
export class PlaceResolver {
  @Query(() => [Place])
  async places() {
    const snapshot = await firestore().collection(TABLES.PLACE).get();
    return snapshot.docs.map((place) => {
      return { id: place.id, ...place.data() };
    });
  }

  @Query(() => Place)
  async place(@Arg("placeId") placeId: string) {
    const snapshot = await firestore()
      .collection(TABLES.PLACE)
      .doc(placeId)
      .get();
    return { id: snapshot.id, ...snapshot.data() };
  }

  @Query(() => [Place])
  async trending() {
    //TODO: implements trending Places
  }

  @Query(() => [Place])
  async newPlaces() {
    //TODO: implements new Places
  }

  @FieldResolver()
  async rates(@Root() place: Place) {
    const snapshot = await firestore()
      .collection(TABLES.RATE)
      .where("placeId", "==", place.id)
      .get();
    return snapshot.docs.map((rate) => {
      return { id: rate.id, ...rate.data() };
    });
  }

  @FieldResolver()
  async averageNote(@Root() place: Place) {
    const snapshot = await firestore()
      .collection(TABLES.RATE)
      .where("placeId", "==", place.id)
      .get();

    const rates = snapshot.docs.map((rate) => {
      return { id: rate.id, ...rate.data() };
    });

    return (rates as Rate[]).reduce((a, b) => a + b.grade, 0) / rates.length;
  }
}
