import { useQuery } from "@apollo/client";
import { DocumentNode } from "graphql";
import React from "react";
import Place from "../../Place";
import PlaceSkeleton from "../../Place/PlaceSkeleton";
import { IPlace } from "../../types/Place";
import HomeListLayout from "./HomeListLayout";

type Props = {
  query: DocumentNode;
};

export default function HomeList({ query }: Props) {
  const { data, error, loading } = useQuery(query);
  if (error) {
    console.log(error);
    return <>// TODO : Add error </>;
  }
  if (loading)
    return (
      <HomeListLayout>
        {new Array(16).fill(2).map((_, index) => (
          <PlaceSkeleton key={index} />
        ))}
      </HomeListLayout>
    );
  return (
    <HomeListLayout>
      {(data.places as Array<IPlace>).map((place) => {
        return <Place key={place.id} place={place} />;
      })}
    </HomeListLayout>
  );
}
