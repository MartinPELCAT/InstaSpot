import "reflect-metadata";
import * as functions from "firebase-functions";
import { initializeApp } from "firebase-admin";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchemaSync } from "type-graphql";
import { Container } from "typedi";
import { PlaceResolver } from "./resolvers/PlaceResolver";
import { TableResolver } from "./resolvers/TableResolver";
import { seedDatabase } from "./seed";
import { isEqual } from "./utils/compare";

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

exports.updateTrigger = functions.firestore
  .document("{collection}/{doc}") //on every collection document change
  .onUpdate((change) => {
    if (isEqual(change.before.data(), change.after.data())) {
      return null;
    } else {
      return change.after.ref.update({
        updatedAt: change.after.updateTime.toDate(),
      });
    }
  });

exports.createTrigger = functions.firestore
  .document("{collection}/{doc}")//on every collection document change
  .onCreate((snapshot) => {
    return snapshot.ref.update({
      createdAt: snapshot.createTime.toDate(),
      updatedAt: snapshot.createTime.toDate(),
    });
  });

seedDatabase();
