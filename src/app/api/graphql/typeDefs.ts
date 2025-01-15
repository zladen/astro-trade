import { gql } from "graphql-tag";

export const rootTypeDefs = gql`
    scalar JSON

    type Query {
        currencies: JSON
        bonds: JSON
        etfs: JSON
        futures: JSON
        getAssets: JSON
        getBrands: JSON
    }
`;

export const typeDefs = [rootTypeDefs];
