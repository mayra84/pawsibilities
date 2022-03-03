import { useSelector } from 'react-redux'
import React from "react";
import GoogleMapReact from 'google-map-react';


export default function DogPark () {
const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 34.05,
      lng: -84.38
    },
    zoom: 11
  };


  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '50vh', width: '50%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCdA5mxV4NJuOjewdQpY7-fBqxTbPqUbR4" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={34.05}
          lng={-84.38}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

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