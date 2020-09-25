import { Place } from "../entities/Place";

export const TABLES = {
  PLACE: "places",
  RATE: "rates",
};

export type PlaceItem = Partial<Place>;
