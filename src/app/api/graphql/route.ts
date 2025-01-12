//import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { gql } from "graphql-tag";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

//import mongooseConnect from "@/database/mongooseConnect";

const resolvers = {
    // ISODate: {
    //     __parseValue(value: string) {
    //         return new Date(value); // value from the client
    //     },
    //     __serialize(value: string) {
    //         return dayjs(value).toISOString(); // value sent to the client
    //     },
    //     __parseLiteral(ast: any) {
    //         if (ast.kind === "StringValue") {
    //             return new Date(parseInt(ast.value, 10)); // ast value is always in string format
    //         }
    //         return null;
    //     },
    // },

    Query: {
        // users: async () => {
        //     return UserModel.find({});
        // },
        // user: async (parent: any, { id, ...rest }: { id: string }) => {
        //     return UserModel.findById(id);
        // },
    },

    // Mutation: {
    //     updateUser: async (parent: IUser, { id, user }: { id: string; user: IUser }) => {
    //         await UserModel.updateOne({ _id: id }, user);
    //         return await UserModel.findById(id);
    //     },
    // },
};

export const typeDefs = gql`
    scalar ISODate

    type Query {
        hello: String

        # users: [User]
        # user(id: ID!): User
    }

    # type Mutation {
    #     updateUser(id: ID!, user: UserInput): User
    # }
`;

const server = new ApolloServer({
    resolvers,
    typeDefs,
});

const handler = startServerAndCreateNextHandler(server, {
    // Похоже, что в @as-integrations/next типы не совсем корректные
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    context: async (nextApiRequest) => {
        // Этот вызов будет выполняться перед любым запросом
        //await mongooseConnect();
        return { req: { cookies: nextApiRequest.cookies._parsed } };
    },
});

export { handler as GET, handler as POST };
