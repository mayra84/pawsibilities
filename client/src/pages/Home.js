import { Center, Divider, Flex } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import Card from 'src/components/Card'
import CurrentDay from 'src/components/CurrentDay'
import HealthLog from 'src/components/HealthLog'
import HomePageHero from 'src/components/HomePageHero'
import HomePageRegistration from 'src/components/HomePageRegistration'

import Carousel from '../components/Carousel'
// import DogProfileForm from './DogProfileForm'
import Login from './Login'

// import Features from '../Features'

function Home() {
  const currentUser = useSelector(state => state.user.currentUser)

  //display login false, click on link -> true

  return (
    <div>


      {currentUser ? (
        <>

          <CurrentDay />
         
        </>

      ) : (

        <div>
          <Carousel />

          <HomePageRegistration />
          
          {/* <Flex justifyContent={'center'} alignItems={'center'} alignContent={'center'} m={'0 auto'}>
            <Center p={'10'} height='60vh'>
              <HomePageHero />

              <Divider borderColor={'transparent'} orientation='vertical' mx={'15%'} />

              <Register />
            </Center>
          </Flex> */}


        </div>
      )}


    </div>
  )
}

export default Home
