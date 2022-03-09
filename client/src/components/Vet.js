import { useSelector } from 'react-redux'
import React, { useEffect, useState } from "react";
import Geocode from 'react-geocode';
import GoogleMapReact from 'google-map-react';
import ParkCard from './DogParkCard';
import { Box, Center, Image, SimpleGrid } from '@chakra-ui/react';
import Marker from './Marker';
import SmoothList from 'react-smooth-list';

function Vet( { props }) {
  const currentUser = useSelector(state => state.user.currentUser)
  const [store, setStore] = useState([]);
  const [map, setMap] = useState(null);
  const [maps, setMaps] = useState(null);
  const [coor, setCoor] = useState()
  const [mark, setMark] = useState([])
  const [show, setShow] = useState(false);
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
          query: ['veterinarian'],
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
          query: ['veterinarian'],
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

 
  const _onClick = () => setShow(!show)

  return (

    <SimpleGrid columns={{ sm: 2, md: 2, lg: 2 }} mb= "10px">
    <SmoothList transitionDuration={1400}>
    <div>
      <div>
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
      </div>
    </div>
    </SmoothList>
    <SmoothList transitionDuration={1400}>
       
        <SmoothList transitionDuration={1400}>
            <Center >
        <Box bg = "#83C5BE" w={'auto'} m="3" borderWidth='1px' borderRadius='lg' overflow='hidden' className='result'>
          <SimpleGrid columns={{ sm: 2, md: 2, lg: 3 }}>
            {store.map((park) => {
              return  <ParkCard key={park.reference} park={park} />
            })}
          </SimpleGrid>
        </Box>
        </Center>
        </SmoothList>
        </SmoothList>
    </SimpleGrid>
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

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
//   const defaultProps = {
//     center: {
//       lat: 34.05,
//       lng: -84.38
//     },
//     zoom: 11
//   };

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

//   return (
//     // Important! Always set the container height explicitly

//     <div style={{ height: '50vh', width: '50%' }}>
//       <GoogleMapReact

export default Vet
