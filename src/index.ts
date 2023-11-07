import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { resolvers } from "./reslovers/reslover";

const port = process.env.port || 9000;

const server = new ApolloServer({ resolvers, typeDefs });

server.listen({ port }, () =>
  console.log(`Server runs at http://localhost:${port}`)
);
