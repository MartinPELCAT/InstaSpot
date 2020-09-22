import { Rate } from "../entities/Rate";

export const TABLES = {
  PLACE: "places",
  RATE: "rates",
};

export type RateDatas = Omit<Rate, "id">;
