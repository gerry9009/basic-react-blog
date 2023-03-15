// custom hook in react need to start with use

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    /**
     * /blogs           get ->          fetch all blogs
     * /blogs/{id}      get ->          fetch a single blog
     * /blogs           post ->         add a new blog
     * /blogs/{id}      delete ->       Delete a blog
     */
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((resp) => {
        if (!resp.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return resp.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
