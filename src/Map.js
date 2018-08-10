import React, { Component } from 'react'
import MapboxGl from 'mapbox-gl/dist/mapbox-gl.js'

class Map extends Component {

    constructor(props){
        super(props);
        this.state = {
            lng: props.lng,
            lat: props.lat
        }
    }
    
  componentDidMount() {
    MapboxGl.accessToken = 'pk.eyJ1IjoiYXJuYXVkZWhyZXNtYW5uIiwiYSI6ImNqa21xYWc0eDBiZmQzd21oNWQwZnZpYWIifQ.xfsx5l4zdBhnkpWyhlUD4A'

    new MapboxGl.Map({
      container: this.container,
      style: 'mapbox://styles/arnaudehresmann/cjkn0f1vt096y2ro4zvz2t86e',
      center: [this.state.lng, this.state.lat],
      zoom: 5      
    })
  }

  render() {
    return (
      <div className='Map' ref={(x) => { this.container = x }}>
      </div>
    )
  }
}

export default Map