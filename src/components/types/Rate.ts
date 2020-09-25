import { firestore } from "firebase";

export type Rate = {
  grade?: number;
  comment?: string;
  id?: string;
  createdAt?: firestore.Timestamp;
  updatedAt?: firestore.Timestamp;
  deletedAt?: firestore.Timestamp;
};
