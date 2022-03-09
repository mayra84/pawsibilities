import React from 'react'
import { useSelector } from 'react-redux'
// import Carousel from '../components/Carousel'
// import Login from './Login'
// import Register from './Register'
// import Features from '../Features'

import DogPark from 'src/components/DogPark';

// import DogPark from 'src/components/DogPark';


import Weather from 'src/components/Weather';
import Weather2 from 'src/components/Forecast2'
import { Box, Flex, SimpleGrid, Spinner } from '@chakra-ui/react';
import DogParkButton from 'src/components/DogParkButton';



function Map(status) {
  const currentUser = useSelector(state => state.user.currentUser)
  const render = status
  //display login false, click on link -> true

  return (
    <div>
      {/* <DogParkButton /> */}
      <SimpleGrid columns={{ sm: 2, md: 2, lg: 2 }} mb= "10px">
          <DogPark />
          <Weather />
          </SimpleGrid>
          <Weather2 />
        <Box padding={'5px'}></Box>
    </div>
  )

}

export default Map

