import { useSelector } from 'react-redux'
import React, { useEffect, useState } from "react";
import Geocode from 'react-geocode';
import GoogleMapReact from 'google-map-react';
import ParkCard from './DogParkCard';
import { Box, Button, Image, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react';
import Marker from './Marker';
import SmoothList from 'react-smooth-list';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

function DogPark( { props }) {
  const currentUser = useSelector(state => state.user.currentUser)
  const [store, setStore] = useState([]);
  const [map, setMap] = useState(null);
  const [maps, setMaps] = useState(null);
  const [coor, setCoor] = useState()
  const [mark, setMark] = useState([])
  
  // console.log("this  is the ", currentUser)
  useEffect(() => {
    if (!currentUser || !maps || !map) {
      return
    }
    fetchZipcode(currentUser)
  }, [currentUser, map, maps]);

  useEffect(() => {
    if (!currentUser || !maps || !map) {
      return
    }
    fetchThing(currentUser)
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
        setCoor({ lat, lng })
        service.textSearch(request, (results, status) => {
          if (status === maps.places.PlacesServiceStatus.OK) {
            setStore(results)
          }
        })
      })
  }


   const fetchThing = async (currentUser) => {
   Geocode.setLanguage('en');
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
          fields: [ 'geometry'],
        };
        service.textSearch(request, (results, status) => {
          if (status === maps.places.PlacesServiceStatus.OK) {
            setMark(results)
    
          }
        })
       }
   )}
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
  const { isOpen, onOpen, onClose } = useDisclosure()

  const OverlayOne = () => (
    <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px)'
    />
)

const [overlay, setOverlay] = React.useState(<OverlayOne />)
 

  return (

    <SmoothList transitionDuration={1400}>
    <div>
      <div>
      <Button colorScheme = {'teal'} mt={'12px'} onClick={onOpen}>Show all local Dog Parks</Button>
        <div style={{ height: '400px', width: '100%', padding: "12px" }}>
          <GoogleMapReact
            defaultCenter={defaultProps.center}
            center={coor}
            defaultZoom={defaultProps.zoom}
            bootstrapURLKeys={{ key: "AIzaSyCdA5mxV4NJuOjewdQpY7-fBqxTbPqUbR4", libraries: ['places'] }}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
      {mark.map ((park) => {
   return <Marker  lat={park.geometry.location.lat()}
   lng={park.geometry.location.lng()} key = {park.reference} park = {park}/>
})}
  
          </GoogleMapReact>
        </div>
      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} >
      {overlay}
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>All local Dog Parks</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SmoothList transitionDuration={1400}>
        <Box bg = "#83C5BE" maxW='xl' borderWidth='1px' borderRadius='lg' overflow='hidden' className='result'>
          <SimpleGrid columns={{ sm: 2, md: 2, lg: 2 }}>
            {store.map((park) => {
              return  <ParkCard key={park.reference} park={park} />
            })}
          </SimpleGrid>
        </Box>
        </SmoothList>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='teal' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>
    </div>
    </SmoothList>
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
