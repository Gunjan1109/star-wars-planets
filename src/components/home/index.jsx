import { useEffect, useState } from "react";
import { useFetchPlanets } from "../../hooks/use-fetch-planet";
import PaginationBar from "../pagination";
import "./style.css";
import PlanetCard from "../planet-card";

const Home = () => {
    const [planets, setPlanets] = useState([]);
    const [totalPlanets, setTotalPlanets] = useState();
    const [page, setPage] = useState(1);

    const { isLoading, isError, planets: data, fetchPlanetsData } = useFetchPlanets();

    useEffect(() => {
      if(!isLoading && !isError && data){
        const {count, results: planets} = data.data;
        setTotalPlanets(Math.ceil(count / 10));
        setPlanets(planets);
      }
      window.scrollTo(0, 0)
    
    }, [isLoading, isError, data])

    const updatePlanets = (event) => {
        const { selected } = event;
        setPage(selected + 1);
        fetchPlanetsData(selected + 1)
      };

  return (
    <div className="container">
    <h1 className="title">Star Wars Planets Directory</h1>
    {isLoading && <p>Loading...</p>}
    {isError && <p>Error fetching data</p>}
    {planets.length > 0 && (
      <>
        <div className="planets-list">
          {planets.map(({ name, climate, population, terrain, residents }, index) => (
            <PlanetCard
              key={index}
              climate={climate}
              name={name}
              population={population}
              residents={residents}
              terrain={terrain}
            />
          ))}
        </div>
        <PaginationBar
          forcePage={page - 1 || 0}
          pageCount={totalPlanets}
          onPageChange={updatePlanets}
        />
      </>
    )}
  </div>
  );
};

export default Home;