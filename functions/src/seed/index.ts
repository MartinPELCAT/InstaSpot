import { firestore } from "firebase-admin";
import { TABLES } from "../types/constants";

export const seedDatabase = async () => {
  console.log("Seeding database ...");

  await firestore()
    .collection(TABLES.PLACE)
    .add({
      title: "Test title: " + Math.random(),
      description: "Test description: " + Math.random(),
    });

  //   await firestore().collection(TABLES.PLACE).add({});
};
