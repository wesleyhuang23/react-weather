import React from 'react';
import { getWeather } from './../weather.resource';
import Nav from './../nav/Nav';

export default class HomeView extends React.Component {
  constructor(){
    super();
    this.state = {
      city: ""
    };
  }
  handleCityChange(event){
    console.log(event.target.value);
    this.setState({city: event.target.value});
  }
  handleSubmit(){
    console.log(this.state.city);
    getWeather(this.state.city).then(data => {
      console.log(data.data);
			this.setState({
        temp: Math.floor(1.8 * (data.data.main.temp - 273) + 32),
        maxTemp: Math.floor(1.8*(data.data.main.temp_max - 273) + 32),
        minTemp: Math.floor(1.8*(data.data.main.temp_min -273) + 32),
        humidity: data.data.main.humidity,
        skys: data.data.weather[0].description,
        country: data.data.sys.country
			});
		});
  }
  render () {
    return (
      <div className="home">
        <Nav />
        <h1>React Weather</h1>
        <input placeholder="City" onChange={ this.handleCityChange.bind(this)} type="text"/>
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
      <br/>
      <br/>
        <div className="info">
          <h2>{this.state.city} {this.state.country}</h2>
          <br/>
          Temp: {this.state.temp}
          <br />
          Max: {this.state.maxTemp}
          <br />
          Min: {this.state.minTemp}
          <br />
          Humidity: {this.state.humidity}
          <br />
          <p>{this.state.skys}</p>
        </div>
      </div>
    )
  }
}
