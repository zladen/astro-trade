import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

export const server = new ApolloServer({
    resolvers,
    typeDefs,
});

export const handler = startServerAndCreateNextHandler(server, {
    context: async () => {
        const token = process.env.NEXT_PUBLIC_INVEST_SECRET_SANDBOX || "";
        return { token };
    },
});
