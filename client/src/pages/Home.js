import { Center, Divider, Flex } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import HealthLog from 'src/components/HealthLog'
import HomePageHero from 'src/components/HomePageHero'
import Carousel from '../components/Carousel'
// import DogProfileForm from './DogProfileForm'
import Login from './Login'
import Register from './Register'
// import Features from '../Features'

function Home() {
  const currentUser = useSelector(state => state.user.currentUser)

  //display login false, click on link -> true

  return (
    <div>





      {currentUser ? (
        <HealthLog />
      ) : (

        <div>
          <Carousel />
<Flex justifyContent={'center'} alignItems={'center'} alignContent={'center'} m={'0 auto'}>
          <Center p={'10'} height='60vh'>
          <HomePageHero />

            <Divider orientation='vertical' mx={'15%'}/>

          <Register />
          </Center>
          </Flex>

        </div>
      )}



    </div>
  )
}

export default Home
