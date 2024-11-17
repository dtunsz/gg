import { useEffect, useState } from "react";

export default function useFetch(url, requestMethod = "GET", formData = null) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const requestObject = {
        method: requestMethod,
    };
    if (formData !== null) {
        requestObject.body = JSON.stringify(formData);
    }

    const refetch = async () => {
        // useEffect(() => {
        setLoading(true);
        await fetch(url, {
            ...requestObject,
        })
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                return data;
            })
            .catch((err) => {
                setError(err);
                return err;
            })
            .finally(() => setLoading(false));
        // }, []);
    };

    return { data, loading, error, refetch };
}
