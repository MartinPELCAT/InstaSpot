import { Place } from "../entities/Place";
import { Rate } from "../entities/Rate";

export const TABLES = {
  PLACE: "places",
  RATE: "rates",
};

export type RateDatas = Partial<Rate>;

export type PlaceItem = Partial<Place>;
