import React from 'react'
import { Map,GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './CurrentLocation';

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
        showDiv:false,
        stores: [
            {lat: 33.651844, lng: 72.958613, name:'Plumber',icon:'https://columbiabasinsatellite.com/wp-content/uploads/2017/07/Electrical_Hover1.png'},
            {latitude: 33.654237, longitude: 72.964447, name:'Electrician Servies',icon:'https://columbiabasinsatellite.com/wp-content/uploads/2017/07/Electrical_Hover1.png'},
            {latitude: 33.651165, longitude: 72.970495, name:'Carpentar Services',icon:'https://columbiabasinsatellite.com/wp-content/uploads/2017/07/Electrical_Hover1.png'},
            {latitude: 33.644714, longitude: 72.960768, name:'Plumber Services',icon:'https://cdn.websites.hibu.com/7da2af4cb2454e0f9a5b63524adbc06d/dms3rep/multi/mobile/hhh1_revised.png'},
            {latitude: 33.667909, longitude: 72.997444, name:'Plumber Services',icon:'https://columbiabasinsatellite.com/wp-content/uploads/2017/07/Electrical_Hover1.png'},
            {latitude: 33.669105, longitude: 73.000318, name:'Plumber Services',icon:'https://columbiabasinsatellite.com/wp-content/uploads/2017/07/Electrical_Hover1.png'}]
          }
          };

    onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
    };
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={this.onMarkerClick}
     name={store.name}
     title={store.name}
     icon={{
        url: store.icon,
        anchor: new this.props.google.maps.Point(48, 48),
        scaledSize: new this.props.google.maps.Size(48, 48)
    }}
      />
    })
  };
  render() {
    return (
        
        <div>
        <CurrentLocation
          centerAroundCurrentLocation
          google={this.props.google}
        >
          <Marker
            onClick={this.onMarkerClick}
            onMouseover={this.onMouseoverMarker}
            onMouseout={this.onMouseoutMarker}
            title={'The marker`s title will appear as a tooltip.'}
            name={'current location'} 
            icon={{
                url: 'https://cdn3.iconfinder.com/data/icons/maps-and-navigation-7/65/68-512.png',
                anchor: new this.props.google.maps.Point(48, 48),
                scaledSize: new this.props.google.maps.Size(48, 48)
            }}
            />
            {this.displayMarkers()}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </CurrentLocation>
        </div>
      );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyC7HwS4ZRb7QPIfLGHyEMiRIiJuWGzTejs'
})(MapContainer);



// export class MapContainer extends React.Component {
//   state = { userLocation: { lat: 32, lng: 32 }, loading: true };

//   componentDidMount(props) {
//     navigator.geolocation.getCurrentPosition(
//       position => {
//         const { latitude, longitude } = position.coords;

//         this.setState({
//           userLocation: { lat: latitude, lng: longitude },
          
//           loading: false
//         });
//       },
//       () => {
//         this.setState({ loading: false });
//       }
//     );
//   }

//   render() {
//     const { loading, userLocation } = this.state;
//     console.log(userLocation.lat, userLocation.lng)
//     const { google } = this.props;

//     if (loading) {
//       return null;
//     }

//     return <Map google={google} initialCenter={userLocation} zoom={10} />;
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyC7HwS4ZRb7QPIfLGHyEMiRIiJuWGzTejs"
// })(MapContainer);