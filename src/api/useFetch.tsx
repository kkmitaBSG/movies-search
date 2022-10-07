import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import messages from "../constants/messages";

export interface Items {
  id: string;
  title: string;
  overview?: string;
  original_language?: string;
}

interface UseFetchResponseType {
  status: string;
  results: Items[];
}

export enum LoadingStatus {
  Waiting = "waiting",
  Fetching = "fetching",
  Fetched = "fetched",
}

const useFetch = (searchValue = ""): UseFetchResponseType => {
  const [status, setStatus] = useState<LoadingStatus>(LoadingStatus.Waiting);
  const [results, setData] = useState<Items[]>([]);
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus(LoadingStatus.Fetching);
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=92b418e837b833be308bbfb1fb2aca1e&query=${searchValue}`
        );

        setSearchParams({ searchParam: searchValue });

        const data = await response.json();
        if (!response.ok) {
          throw response;
        }

        setData(data.results);
        setStatus(LoadingStatus.Fetched);
      } catch {
        console.log(messages.fetchResponse)
      }
    };

    fetchData();
  }, [searchValue, setSearchParams]);

  return { status, results };
};

export default useFetch;
