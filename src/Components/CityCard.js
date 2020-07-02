import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const CityCard = (props) => {

  const cleanName = (x) =>{
    return x.toLowerCase().replace(/\s/g,'');
  }

  return (

      <Link to={"/list/"+cleanName(props.city)} style={{textDecoration:'none'}} className={props.display ? "CityCard CityCardHover" : "CityCard invis"}>
            {props.display ? <h2>{props.city}</h2> : ""}
            {props.display ? <p>Kevin Goenadibrata</p> : ""}
      </Link>

  );
}

export default CityCard;
