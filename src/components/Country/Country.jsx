import React, { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);
  // console.log(country.area.area);

  const handleVisited = () => {
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    // setVisited(visited ? false : true);
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    // <div className={`flage-image border-lg text-center ${visited ? 'country-visited' : 'country-not-visited'}`}>
    <div className={`flag_image ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Capital: {country.capital.capital}</p>
      <p>Continents: {country.continents.continents}</p>
      <p>Population: {country.population.population}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"} Located
        In {country.continents.continents}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
