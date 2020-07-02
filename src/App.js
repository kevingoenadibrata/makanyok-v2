import React from 'react';
import Sidebar from './Components/Sidebar';
import RestaurantCard from './Components/RestaurantCard';
import Home from './Routes/Home/Home';
import FoodList from './Routes/FoodList/FoodList';
import Admin from './Routes/Admin/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
      <div className="sidebar-container">
        <Sidebar />
      </div>

      <div className="master-container">
        <Switch>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route path="/list/:id">
            <FoodList />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
