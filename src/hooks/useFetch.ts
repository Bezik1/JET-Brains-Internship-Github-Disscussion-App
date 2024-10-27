import axios from "axios";
import { useState, useCallback, useEffect } from "react";

export const useFetch = <T,>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);

            const githubClient = axios.create({
                baseURL: 'https://api.github.com',
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
                },
            });

            const res = await githubClient.get<T>(url);
            setData(res.data);
            setErr(null);
        } catch (error) {
            setErr(`Axios fetching error: ${error}`);
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, err, setData };
};
