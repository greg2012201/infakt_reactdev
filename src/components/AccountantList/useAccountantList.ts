import { useState, useEffect } from 'react';
import { AccountantResponseType } from '../../types';
import useFetch from '../../hooks/useFetch';

const useAccountantList = () => {
  const [data, setData] = useState<AccountantResponseType>();
  const { isLoading, error, fetchData } = useFetch();

  const fetchPage = () => {
    fetchData<AccountantResponseType>({
      fetcher: async () =>
        await fetch(`https://randomuser.me/api/?gender=female&page=${(data?.info?.page ?? 0) + 1}&results=4`, {
          method: 'GET',
        }),
      onSuccess: res => {
        setData(prevState => {
          if (!prevState?.results?.length) {
            return res;
          }
          return {
            results: [...prevState.results, ...res.results],
            info: { ...prevState.info, ...res.info },
          };
        });
      },
    });
  };

  useEffect(() => {
    if (data?.results?.length || isLoading) {
      return;
    }
    fetchPage();
  }, []);

  return {
    isLoading: isLoading && !data?.results?.length,
    isLoadingMore: isLoading && !!data?.results?.length,
    error,
    accountants: data?.results ?? [],
    fetchMore: fetchPage,
  };
};
export default useAccountantList;
