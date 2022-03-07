import { connect, useSelector } from 'react-redux'
import React, { useEffect, useState } from "react";
import Geocode from 'react-geocode';
import GoogleMapReact from 'google-map-react';
import { render } from '@testing-library/react';
import { Center } from '@chakra-ui/react';



function DogPark({ currentUser }) {
  const [store, setStore] = useState([]);
  const [map, setMap] = useState(null);
  console.log("this is the ", currentUser)
  useEffect(() => {
    if (!currentUser) {
      return
    }
    fetchZipcode(currentUser)
  }, [currentUser]);

  const fetchZipcode = async (currentUser, props) => {
    console.log(currentUser)
    await Geocode.setLanguage('en');
    Geocode.setApiKey("AIzaSyCdA5mxV4NJuOjewdQpY7-fBqxTbPqUbR4");
    Geocode.fromAddress(currentUser.zipcode).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat)
        const google = { props };
        const service = new google.maps.places.PlacesService(map);
        const startPoint = new google.maps.LatLng(lat, lng);
        var request = {
          location: startPoint,
          radius: '50000',
          query: ['dog park'],
          fields: ['name', 'geometry', 'formatted_address', 'formatted_phone_number', 'website'],
        };
        service.textSearch(request, (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            setStore(
              store = results
            )
          }
        })
      })
  }
  return (
    <div>
      <h1>Header</h1>
      {store?.length && store.map((result) => {
        <div>
          <h4>{result.name}</h4>
          <h6>{result.formatted_address}</h6>
          <p>Rating: {result.rating}/5</p>
        </div>
      })}
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log("Dog Park componenet", state)
  const { currentUser } = state.user
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(DogPark)
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
//   const defaultProps = {
//     center: {

//         lat: 34.05,
//         lng: -84.38

//     },
//     zoom: 11
//   };


//   // axios.get('/api/v1/users')
//   //   .then(res => {
//   //       console.log(res.data[0].zipcode)
//   //       fetchWeather(res.data)
//   //   })



//   return (
//     // Important! Always set the container height explicitly

//     <div style={{ height: '50vh', width: '50%' }}>
//       <GoogleMapReact

//         bootstrapURLKeys={{ key: "AIzaSyCdA5mxV4NJuOjewdQpY7-fBqxTbPqUbR4" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <AnyReactComponent
//           lat={34.05}
//           lng={-84.38}
//           text="My Marker"
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }


