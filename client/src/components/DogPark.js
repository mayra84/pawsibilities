import { useSelector } from 'react-redux'
import React from "react";
import GoogleMapReact from 'google-map-react';
import { Center } from '@chakra-ui/react';


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
    <Center py={12}>
    <div style={{ height: '75vh', width: '75%'}}>
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
    </Center>
  );
}

