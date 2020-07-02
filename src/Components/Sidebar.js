import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="top">
        <Link to="/" style={{textDecoration:'none'}}><h1>Makan Yok!</h1></Link>
        <p>Makan Yok is a collaborative food guide powered by the community. We try our best to brew the lists to match your tastebuds. Currently, we are actively seeking content writers to provide various food lists for our viewers.</p>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default Sidebar;
