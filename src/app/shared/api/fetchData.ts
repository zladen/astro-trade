type FetchOptions = {
    url: string;
    body: Record<string, unknown>;
    token: string;
};
export const fetchData = async ({ url, body, token }: FetchOptions) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
    }

    return response.json();
};

export default fetchData;
