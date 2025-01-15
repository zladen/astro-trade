import fetchData from "@/app/shared/api/fetchData";
import buildUrl from "@/app/shared/api/buildUrl";

export const futuresResolver = {
    Query: {
        //Получить список фьючерсов
        futures: async () => {
            const url = buildUrl("InstrumentsService", "Futures");
            if (!url) {
                throw new Error("Invalid endpoint");
            }
            return await fetchData({
                url,
                body: {
                    instrumentStatus: "INSTRUMENT_STATUS_AVAILABLE_FOR_TRADING",
                    instrumentExchange: "INSTRUMENT_EXCHANGE_MOEX",
                },
                token: process.env.NEXT_PUBLIC_INVEST_SECRET_SANDBOX || "",
            });
        },
    },
};
