import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
function useFetch(id, condition) {
  const { data, error, isLoading } = useSWR(
    condition ? `/api/${id}` : null,
    fetcher
  );

  return {
    data: data,
    loading: isLoading,
    error: error,
  };
}
export default useFetch;
