import { useState, useEffect } from 'react';
import request from '~/requests';

const useSimpleFetch = (path, slug = ' ', initialState = {}) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (slug) {
        const response = await request.get(`${path}${slug}`);
        setLoading(false);
        return response.data;
      }
    };

    fetchData().then((res) => {
      setState((prev) => ({ ...prev, ...res?.data }));
    });
  }, [path, slug]);

  return [state, loading];
};

export default useSimpleFetch;
