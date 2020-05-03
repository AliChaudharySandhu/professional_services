import React from 'react';
import ReactDOM from 'react-dom';

const mapStyles = {
  map: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    marginBottom: 'calc(100% - (105% + 60px))',
    
  },
  loader:{
    position: 'absolute',
    top: 'calc(50% - 4em)',
    left: 'calc(50% - 4em)',
    width: '4em',
    height: '4em',
    border: '0.8em solid rgba(0, 0, 0, 0.2)',
    borderLeft: '0.8em solid #000000',
    borderRadius: '50%',
    animation: 'load8 1.1s infinite linear',
    transition: 'opacity 0.3s',
  }

};

export class CurrentLocation extends React.Component {
    constructor(props) {
        super(props);
    
        const { lat, lng } = this.props.initialCenter;
        this.state = {
          currentLocation: {
            lat: lat,
            lng: lng
          }
        };
      }
      componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
          this.loadMap();
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
          this.recenterMap();
        }
      }
      recenterMap() {
        const map = this.map;
        const current = this.state.currentLocation;
    
        const google = this.props.google;
        const maps = google.maps;
    
        if (map) {
          let center = new maps.LatLng(current.lat, current.lng);
          map.panTo(center);
        }
      }
      componentDidMount() {
        if (this.props.centerAroundCurrentLocation) {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
              const coords = pos.coords;
              this.setState({
                currentLocation: {
                  lat: coords.latitude,
                  lng: coords.longitude
                }
              });
            });
          }
        }
        this.loadMap();
      }

      loadMap() {
        if (this.props && this.props.google) {
          // checks if google is available
          const { google } = this.props;
          const maps = google.maps;
    
          const mapRef = this.refs.map;
    
          // reference to the actual DOM element
          const node = ReactDOM.findDOMNode(mapRef);
    
          let { zoom } = this.props;
          const { lat, lng } = this.state.currentLocation;
          const center = new maps.LatLng(lat, lng);
          const mapConfig = Object.assign(
            {},
            {
              center: center,
              zoom: zoom
            }
          );
    
          // maps.Map() is constructor that instantiates the map
          this.map = new maps.Map(node, mapConfig);
        }
      }
      renderChildren() {
        const { children } = this.props;
    
        if (!children) return;
    
        return React.Children.map(children, c => {
          if (!c) return;
          return React.cloneElement(c, {
            map: this.map,
            google: this.props.google,
            mapCenter: this.state.currentLocation
          });
        });
      }
      render() {
        const style = Object.assign({}, mapStyles.map);
       return (
         <div>
           <div style={mapStyles.map} ref="map">
             <div style={mapStyles.loader} ref="loader">

             </div>
           </div>
           {this.renderChildren()}
         </div>
       );
     }

}
export default CurrentLocation;

CurrentLocation.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: 33.738045,
    lng: 73.084488
  },
  centerAroundCurrentLocation: false,
  visible: true
};