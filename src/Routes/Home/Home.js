import React from 'react';
import CountrySection from '../../Components/CountrySection';

const Home = (props) => {
  return (
    <div className="Home">
      <CountrySection
        country="United States"
        cities={["San Diego", "Los Angeles", "San Francisco", "San Jose", "Las Vegas", "Boston", "Seattle", "New York"]} />
      <CountrySection
        country="Indonesia"
        cities={["Surabaya", "Jakarta", "Semarang", "Bali", "Bandung", "Solo", "Makassar"]} />
    </div>
  );
}

export default Home;
