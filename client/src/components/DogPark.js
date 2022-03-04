import { connect, useSelector } from 'react-redux'
import React, {useEffect} from "react";
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import { render } from '@testing-library/react';
import { Center } from '@chakra-ui/react';



function DogPark ({currentUser}) {
  // const [currentWeather, setCurrentWeather] = useState(null);
  console.log ("this is the ", currentUser)

//   useEffect (() => {
//     fetchWeather(currentUser)
// }, [])


// const fetchWeather = async (currentUser) => {

//   await fetch(`http://api.weatherapi.com/v1/current.json?key=ca26e518dd18404c95f191858222702&q=${currentUser.zipcode}&`)
//       .then((res) => res.json())
//       .then((data) => {
//           var weather = data
//           console.log(weather)
//           console.log(weather.current.condition.text)
//           setCurrentWeather(weather)
//       })
// }


//   useEffect (() => {
//     fetchWeather(currentUser)
// }, [])


// const fetchWeather = async (currentUser) => {

//   await fetch(`http://api.weatherapi.com/v1/current.json?key=ca26e518dd18404c95f191858222702&q=${currentUser.zipcode}&`)
//       .then((res) => res.json())
//       .then((data) => {
//           var weather = data
//           console.log(weather)
//           console.log(weather.current.condition.text)
//           setCurrentWeather(weather)
//       })
// }

const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const defaultProps = {
    center: {
      lat: 34.05,
      lng: -84.38
    },
    zoom: 11
  };


  // axios.get('/api/v1/users')
  //   .then(res => {
  //       console.log(res.data[0].zipcode)
  //       fetchWeather(res.data)
  //   })



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


// Geocode.setLanguage('en');
// Geocode.setApiKey("AIzaSyCdA5mxV4NJuOjewdQpY7-fBqxTbPqUbR4" );
// Geocode.fromAddress(currentUser.zipCode).then(
//     response => {
//         const { lat, lng } = response.results[0].geometry.location;
//         const { google } = this.props;
//         const service = new google.maps.places.PlacesService(this.state.map);
//         const startPoint = new google.maps.LatLng(lat, lng);
//         var request = {
//             location: startPoint,
//             radius: '50000',
//             query: ['dog park'], //vet, adoption center
//             fields: ['name', 'geometry', 'formatted_address', 'formatted_phone_number', 'website'],
//         };

const mapStateToProps = (state) => {
  console.log("Dog park componenet", state)
  const {currentUser} = state.user 
  return {
    currentUser
  }
}

export default connect(mapStateToProps) (DogPark)
