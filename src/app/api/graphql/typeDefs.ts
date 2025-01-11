//import { gql } from "graphql-tag";
// import { userTypeDefs } from "./types/user";
// import { eventTypeDefs } from "./types/event";
// import { tripTypeDefs } from "./types/trip";
// import { commentTypeDefs } from "./types/comment";
// import { locationTypeDefs } from "./types/location";
// import { listTypeDefs } from "./types/list";

import { gql } from "@apollo/client";

export const rootTypeDefs = gql`
    scalar ISODate

    type Query {
        hello: String

        # users: [User]
        # user(id: ID!): User

        # events: [Event]
        # event(id: ID!): Event

        # trips: [Trip]
        # trip(id: ID!): Trip

        # comments(event_id: ID!, limit: Int): [Comment]

        # search(text: String!): [Event]

        # eventsByDate(date: String!): [Event!]!

        # lists: [List]
        # listItem(id: ID!): List
    }

    # type Mutation {
    #     updateUser(id: ID!, user: UserInput): User

    #     createEvent(event: EventInput): Event
    #     updateEvent(id: ID!, event: EventInput): Event
    #     deleteEvent(id: ID!): Event

    #     createTrip(trip: TripInput): Trip
    #     updateTrip(id: ID!, trip: TripInput): Trip
    #     deleteTrip(id: ID!): Trip

    #     saveComment(comment: CommentInput): Comment
    #     updateComment(id: ID!, comment: CommentInput): Comment
    #     deleteComment(commentId: ID!, userId: ID!): String
    #     likeComment(commentId: ID!, userId: ID!): Comment

    #     createList(list: ListInput): List
    #     updateList(id: ID!, list: ListInputUpdate): List
    #     deleteList(id: ID!): List
    # }
`;

export const typeDefs = [
    rootTypeDefs,
    // userTypeDefs,
    // eventTypeDefs,
    // tripTypeDefs,
    // commentTypeDefs,
    // locationTypeDefs,
    // listTypeDefs,
];
