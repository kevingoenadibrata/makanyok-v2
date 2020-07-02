import React, {useState, useEffect} from 'react';
import CityCard from './CityCard';
import AnimateHeight from 'react-animate-height';

const RestaurantCard = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(()=>{
    setIsExpanded(props.isExpanded);
  }, [props]);

  return (
    <div className="RestaurantCard" onClick={()=>props._handleClick(props.index, !isExpanded)}>
      <div className={isExpanded ? "top-container" : "top-container canhover"}>
        <h3>{props.obj.name}</h3>
        <p>{props.obj.cuisine}</p>
      </div>
      <AnimateHeight className="expandable" duration={500} height={isExpanded ? 'auto' : 0}>
        <div className="expandable-container">
          <p>{props.obj.description}</p>
          <p>{props.obj.address}</p>
          <ul>{props.obj.order.map(item=><li>{item}</li>)}</ul>
        </div>
      </AnimateHeight>
    </div>
  );
}

export default RestaurantCard;
