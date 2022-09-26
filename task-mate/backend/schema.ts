import { resolvers } from "./resolvers";
import { typeDefs } from "./type-defs";
import { makeExecutableSchema } from "@graphql-tools/schema";

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
