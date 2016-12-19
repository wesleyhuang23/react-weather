import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Master from '../styles/Master.scss';

import HomeView from './home/HomeView';
import VideosView from './videos/VideosView';
import ForecastView from './forecast/ForecastView';
import Nav from './nav/Nav';

class App extends React.Component{
	render() {
		return (
			<Router history={hashHistory}>
        <Route path="/" component={HomeView}/>
        <Route path="videos" component={VideosView}/>
        <Route path="forecast" componenet ={ForecastView}/>
      </Router>
		)
	}
}


ReactDOM.render(<App />, document.getElementById("app"));
