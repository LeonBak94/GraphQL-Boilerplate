import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema";
import { resolvers } from "./reslovers/reslover";
import { authorizeUser } from "./middleware";

const port = process.env.port;

const server = new ApolloServer({
  resolvers,
  typeDefs,
  // context: async ({ req }) => {
  //   authorizeUser(req.headers.authentication);
  // },
});

server.listen({ port }, () =>
  console.log(`Server runs at http://localhost:${port}`)
);
