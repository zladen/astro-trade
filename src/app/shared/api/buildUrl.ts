import { apiEndpoints } from "./apiEndpoints";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_T_INVEST;

type EndpointModules = keyof typeof apiEndpoints;

export const buildUrl = (module: EndpointModules, endpoint: string): string => {
    const moduleEndpoints = apiEndpoints[module];

    if (!moduleEndpoints[endpoint]) {
        throw new Error(`Endpoint ${endpoint} not found in module ${module}`);
    }

    return `${BASE_URL}${module}/${moduleEndpoints[endpoint]}`;
};

export default buildUrl;
