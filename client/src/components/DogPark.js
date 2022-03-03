import { useSelector } from 'react-redux'
import React from "react";
import GoogleMapReact from 'google-map-react';


export default function DogPark () {
const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCdA5mxV4NJuOjewdQpY7-fBqxTbPqUbR4" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

//ADD VETS

// Geocode.fromAddress(this.state.zipCode).then(
//     response => {
//         const { lat, lng } = response.results[0].geometry.location;
//         const { google } = this.props;
//         const service = new google.maps.places.PlacesService(this.state.map);
//         const startPoint = new google.maps.LatLng(lat, lng);
//         var request = {
//             location: startPoint,
//             radius: '50000',
//             query: ['dog park'],
//             fields: ['name', 'geometry', 'formatted_address', 'formatted_phone_number', 'website'],
//         };