import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map'

class App extends Component {
  constructor(props){
    super(props);
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition);
    } else {
      this.state = {
        lng : 2.564092,
        lat : 47.133745
      };  
    }
  }

  setPosition(currentPosition){
    this.state = {
      lng : currentPosition.coords.longitude,
      lat : currentPosition.coords.latitude
    };
  }

  render() {
    return (
      <div className="App">
        <Map lng={this.state.lng} lat={this.state.lat} >
        </Map>
      </div>
    );
  }
}

export default App;
