/* import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Grid from 'material-ui/Grid'

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'red',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);
const AnyReactComponentElectrician = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'green',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {lat: 33.67, lng: 73.01},
    zoom: 11,
    key: 'AIzaSyBZJdc3qHPSx2NiwiodB06SR7_1Ryww_jA'
  };

  render() {
    return (
      <div style={{ height: '800px', width: '100%' }}>
       <GoogleMapReact
        bootstrapURLKeys={this.props.key}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent 
          lat={33.676106} 
          lng={73.015500} 
          text={'Plumbing Service'} 
        />
        <AnyReactComponentElectrician 
          lat={33.688103} 
          lng={73.032087} 
          text={'Electrical Service'} 
        />
      </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap; */