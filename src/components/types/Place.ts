import { firestore } from "firebase";

export type IPlace = {
  readonly id?: string;
  title?: string;
  description?: string;
  photoPath?: string;
  latitude?: number;
  longitude?: number;
  geohash?: string;
  likes?: number;
  createdAt?: firestore.Timestamp;
  updatedAt?: firestore.Timestamp;
  deletedAt?: firestore.Timestamp;
};
