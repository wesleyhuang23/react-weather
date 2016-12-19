import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component{
  render(){
    return (
    <div className="Nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="videos">Videos</Link></li>
        <li><Link to="forecast">ForecastView</Link></li>
      </ul>
    </div>
    )
  }
}
