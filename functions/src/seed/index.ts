import { firestore } from "firebase-admin";
import { TABLES } from "../types/constants";

export const seedDatabase = async () => {
  console.log("Seeding database ...");

  for (let index = 0; index < 8; index++) {
    await firestore()
      .collection(TABLES.PLACE)
      .add({
        title: "Test title: " + Math.random(),
        description: "Test description: " + Math.random(),
        photoPath: "/AIGQ7272.JPG",
      });
  }
};
