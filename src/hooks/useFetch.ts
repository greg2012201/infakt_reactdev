import { useState } from "react";

const DEFAULT_ERROR_MESSAGE = `Something went wrong we couldn't fetch data`;

const useFetch = () => {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchData = async <TResponse>({
        onSuccess,
        onError,
        fetcher,
    }: {
        fetcher: () => Promise<Response>;
        onSuccess: (response: TResponse) => void;
        onError?: (error: string | null) => void;
    }) => {
        try {
            const response: Response = await fetcher();
            const data: TResponse = await response.json();
            setLoading(true);
            if (data) {
                onSuccess(data);
                setLoading(true);
                return;
            }
            throw new Error(DEFAULT_ERROR_MESSAGE);
        } catch (error) {
            setLoading(false);
            const errorMessage = typeof error === "string" ? error : DEFAULT_ERROR_MESSAGE;
            setError(errorMessage);
            if (typeof onError === "function") {
                onError(errorMessage);
            }
        }
    };

    return { isLoading, error, fetchData };
};

export default useFetch;
