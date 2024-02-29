import { useCallback, useState } from "react";
import { useQuery } from "react-query";
import { fetchPlanets } from "../api/planets";

export const useFetchPlanets = () => {
    const [page, setPage] = useState(1);    
   
    const { isLoading, isError, data: planets } = useQuery(["fetch-planets", page], async () => {
      if(!page){
        return;
      }
        return fetchPlanets(page)
    }, {
        retry: false,
        refetchOnWindowFocus: false,
        cacheTime: 0,
      })

    const fetchPlanetsData = useCallback((page) => {
        setPage(page);
      }, []);

      return {
        isLoading, isError, planets, fetchPlanetsData
      }
}