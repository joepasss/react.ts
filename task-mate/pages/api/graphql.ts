import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { ApolloServer, gql } from "apollo-server-micro";
import { IResolvers } from "@graphql-tools/utils";
import { NextApiHandler } from "next";

const typeDefs = gql`
  enum TaskStatus {
    active
    completed
  }

  type Task {
    id: Int!
    title: String!
    status: TaskStatus!
  }

  input CreateTaskInput {
    title: String!
  }

  input UpdateTaskInput {
    id: Int!
    title: String
    status: TaskStatus
  }

  type Query {
    tasks(status: TaskStatus): [Task!]!
    task(id: Int!): Task
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task
    updateTask(input: UpdateTaskInput!): Task
    deleteTask(id: Int!): Task
  }
`;

const resolvers: IResolvers = {
  Query: {
    tasks(parent, args, context) {
      return [];
    },
    task(parent, args, contex) {
      return null;
    },
  },
  Mutation: {
    createTask(parent, args, contex) {
      return null;
    },
    updateTask(parent, args, contex) {
      return null;
    },
    deleteTask(parent, args, contex) {
      return null;
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
