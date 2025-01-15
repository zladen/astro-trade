export type EndpointModules = "InstrumentsService" | "MarketDataService";

export const apiEndpoints: Record<EndpointModules, Record<string, string>> = {
    InstrumentsService: {
        Bonds: "Bonds",
        BondBy: "BondBy",
        Currencies: "Currencies",
        CurrenciesBy: "CurrenciesBy",
        Etfs: "Etfs",
        Futures: "Futures",
        GetAssets: "GetAssets",
    },
    MarketDataService: {
        OrderBook: "GetOrderBook",
        Trades: "GetTrades",
    },
};

export default apiEndpoints;
