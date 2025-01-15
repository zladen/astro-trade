import { mergeResolvers } from "@graphql-tools/merge";

import { currenciesResolver } from "./resolvers/currencies";
import { bondsResolver } from "./resolvers/bonds";
import { etfsResolver } from "./resolvers/etfs";
import { futuresResolver } from "./resolvers/futures";
import { getAssetsResolver } from "./resolvers/getAssets";

export const resolvers = mergeResolvers([
    currenciesResolver,
    bondsResolver,
    etfsResolver,
    futuresResolver,
    getAssetsResolver,
]);
