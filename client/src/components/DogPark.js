import { connect, useSelector } from 'react-redux'
import React, { useEffect, useState } from "react";
import Geocode from 'react-geocode';
import GoogleMapReact from 'google-map-react';
import ParkCard from './DogParkCard';
import { Image, SimpleGrid } from '@chakra-ui/react';

function DogPark() {
  const currentUser = useSelector(state => state.user.currentUser)
  const [store, setStore] = useState([]);
  const [map, setMap] = useState(null);
  const [maps, setMaps] = useState(null);
  const [coor, setCoor] = useState()
    // console.log("this  is the ", currentUser)
  useEffect(() => {
    if (!currentUser || !maps || !map) {
      return
    }
    fetchZipcode(currentUser)
  }, [currentUser, map, maps]);



  const fetchZipcode = async (currentUser) => {
    await Geocode.setLanguage('en');
    Geocode.setApiKey("AIzaSyCdA5mxV4NJuOjewdQpY7-fBqxTbPqUbR4");
    Geocode.fromAddress(currentUser.zipcode).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        const service = new maps.places.PlacesService(map);
        const startPoint = new maps.LatLng(lat, lng);
        var request = {
          location: startPoint,
          radius: '50000',
          query: ['dog park'],
          fields: ['name', 'geometry', 'formatted_address', 'formatted_phone_number', 'website'],
        };
        setCoor({lat, lng})
        service.textSearch(request, (results, status) => {
          if (status === maps.places.PlacesServiceStatus.OK) {
            setStore(results)
            console.log(results)
          }
        })
      })
  }
  
  const defaultProps = {

    center: {
      lat: 37.8059887,
      lng: -122.4099154
    },
    zoom: 11
  };
  const handleApiLoaded = (map, maps) => {
    console.log("loaded map")
    setMaps(maps)
    setMap(map)
  };
  const AnyReactComponent = () => <div><Image
  rounded={'lg'}
  height={100}
  width={100}
  objectFit={'cover'}
  src={store.icon}
/>
</div>;
  return (
    <div>
      <div>
        <h1>Header</h1>
        {store.map((park) => {
            return <SimpleGrid columns={{ sm: 2, md: 4, lg: 4 }}> <ParkCard key = {park.name} park = {park}/> </SimpleGrid>
        })}
      </div>
      <div style={{ height: '400px', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={defaultProps.center}
          center={coor}
          defaultZoom={defaultProps.zoom}
          bootstrapURLKeys={{ key: "AIzaSyCdA5mxV4NJuOjewdQpY7-fBqxTbPqUbR4", libraries: ['places'] }}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
  <AnyReactComponent
    lat={coor.lat}
    lng={coor.lng}
    src={store.icon}
  />
        </GoogleMapReact>
      </div>
    </div>
  )
}


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



//   return (
//     // Important! Always set the container height explicitly

//     <div style={{ height: '50vh', width: '50%' }}>
//       <GoogleMapReact

export default DogPark
