import React from 'react'
import { useSelector } from 'react-redux'
// import Carousel from '../components/Carousel'
// import Login from './Login'
// import Register from './Register'
// import Features from '../Features'

import DogPark from 'src/components/DogPark';

// import DogPark from 'src/components/DogPark';

import Weather from 'src/components/Weather';
import { SimpleGrid } from '@chakra-ui/react'


function Map(status) {
    const currentUser = useSelector(state => state.user.currentUser)
    const render = status
    //display login false, click on link -> true

    return (
        <div>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 2}}>
                <DogPark />
                <Weather />
            </SimpleGrid>
        </div>
    )
}

export default Map

