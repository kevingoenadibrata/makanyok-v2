import React, {useState} from 'react';
import RestaurantCard from '../../Components/RestaurantCard';

const foodArr = Array(12).fill({
    name: "Sizzling Pot King",
    cuisine: "Chinese",
    description: "My personal favorite dry pot. If you want to eat spicy, this is the place for you!",
    address: "1826 Donkey Way, San Diego CA 92103",
    order: ["Beef Garlic Pot", "Pork Belly", "Braised Pork"],
    priority: false
  });

const FoodList = () => {
  const [isExpanded, setIsExpanded] = useState(Array(12).fill(false));

  const handleClick = (index, toExpand) => {
    var temp = Array(12).fill(false);
    if(toExpand) temp[index] = true;
    setIsExpanded(temp);
  }
  return (
    <div className="FoodList">
      <h1>San Diego</h1>
      <p>United States - Kevin Goenadibrata</p>
      {foodArr.map((item, index) => <RestaurantCard obj={item} isExpanded={isExpanded[index]} index={index} _handleClick={handleClick}/>)}
    </div>
  );
}

export default FoodList;
