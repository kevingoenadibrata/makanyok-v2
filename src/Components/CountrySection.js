import React from 'react';
import CityCard from './CityCard';
const CountrySection = (props) => {
  return (
    <div className="CountrySection">
      <h1>{props.country}</h1>
      <div className="city-container">
        {props.cities.map(item => <CityCard city={item} display={true} />)}
        {Array(3-props.cities.length%3).fill(<CityCard city="" display={false}/>)}
      </div>
    </div>
  );
}

export default CountrySection;
