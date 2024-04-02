import { useState, useCallback, useEffect } from "react";

export function useCointrak(coinid: string, span: number) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCoinPrices = useCallback(
    (coinid: string, span: number) => {
      console.log("fetchCoinPrices", coinid, span);
      const url = `${process.env.REACT_APP_BACKEND_ROOT}/price/${coinid}?minutes=${span}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    },
    [coinid]
  );

  useEffect(() => {
    console.log(
      `Fetching price data for ${coinid} at around ${span} minutes...`
    );
    fetchCoinPrices(coinid, span);
    const intervalId = setInterval(() => {
      fetchCoinPrices(coinid, span);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [coinid]);

  return { data, loading, error };
}
