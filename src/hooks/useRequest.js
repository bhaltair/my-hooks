import { useState, useEffect } from 'react';

const useRequest = (initialUrl, params) => {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await fetch(url, params).then(res => res.json())
        setData(result);
      } catch (error) {
        console.log(error)
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [url, params]);

  const doFetch = url => {
    setUrl(url);
    
  };

  return { data, isLoading, isError, doFetch };
};

export { useRequest }