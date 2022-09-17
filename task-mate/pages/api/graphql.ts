import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer } from "apollo-server-micro";
import { NextApiHandler } from "next";

const typeDefs = /* GraphQL */ `
  type Query {
    users: [User!]!
  }
  type User {
    name: String
  }
`;

const resolvers = {
  Query: {
    users() {
      return [{ name: "Nextjs" }];
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ...(process.env.NODE_ENV === "development"
      ? [ApolloServerPluginLandingPageGraphQLPlayground]
      : []),
  ],
});

let graphqlHandler: NextApiHandler | undefined;

const handler: NextApiHandler = async (req, res) => {
  if (!graphqlHandler) {
    await apolloServer.start();
    graphqlHandler = apolloServer.createHandler({
      path: "/api/graphql",
    });
  }

  return graphqlHandler(req, res);
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
