import "reflect-metadata";
import * as functions from "firebase-functions";
import { initializeApp } from "firebase-admin";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchemaSync } from "type-graphql";
import { Container } from "typedi";
import { PlaceResolver } from "./resolvers/PlaceResolver";
import { TableResolver } from "./resolvers/TableResolver";

initializeApp();

const app = express();
const schema = buildSchemaSync({
  resolvers: [PlaceResolver, TableResolver],
  container: Container,
  dateScalarMode: "timestamp",
});

const server = new ApolloServer({ schema, playground: true });
server.applyMiddleware({ app, path: "/", cors: true });
exports.gql = functions.https.onRequest(app);
