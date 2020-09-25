import { firestore } from "firebase-admin";
import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Place } from "../entities/Place";
import { AddPlaceInput } from "../types/AddPlaceInput";
import { TABLES } from "../types/constants";

@Resolver(() => Place)
export class PlaceResolver {
  @Query(() => [Place], { nullable: true })
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

  @Mutation(() => Place)
  async addPlace(@Arg("data") newPlace: AddPlaceInput) {
    return await firestore()
      .collection(TABLES.PLACE)
      .add({ ...newPlace })
      .then(async (snapshot) => {
        const addedData = await snapshot.get();
        return {
          id: addedData.id,
          ...addedData.data(),
          updatedAt: firestore.Timestamp.now(),
          createdAt: firestore.Timestamp.now(),
        };
      });
  }
}
